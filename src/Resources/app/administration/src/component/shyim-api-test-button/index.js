const { Component, Mixin } = Shopware;
import template from './shyim-api-test-button.html.twig';

Component.register('shyim-api-test-button', {
    template,

    props: ['label'],
    inject: ['shyimApiTest'],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
        };
    },

    computed: {
        pluginConfig() {
            let $parent = this.$parent;

            while ($parent.actualConfigData === undefined) {
                $parent = $parent.$parent;
            }

            const currentSalesChannelId = $parent.currentSalesChannelId;
            if (currentSalesChannelId === null
                || !(currentSalesChannelId in $parent.actualConfigData)) {
                return $parent.actualConfigData.null;
            }

            return {
                ...$parent.actualConfigData.null,
                ...$parent.actualConfigData[currentSalesChannelId]
            };
        }
    },

    methods: {
        saveFinish() {
            this.isSaveSuccessful = false;
        },

        check() {
            this.isLoading = true;
            this.shyimApiTest.check(this.pluginConfig).then((res) => {
                if (res.success) {
                    this.isSaveSuccessful = true;
                    this.createNotificationSuccess({
                        title: this.$tc('shyim-api-test-button.title'),
                        message: this.$tc('shyim-api-test-button.success')
                    });
                } else {
                    this.createNotificationError({
                        title: this.$tc('shyim-api-test-button.title'),
                        message: this.$tc('shyim-api-test-button.error')
                    });
                }

                this.isLoading = false;
            });
        }
    }
})
