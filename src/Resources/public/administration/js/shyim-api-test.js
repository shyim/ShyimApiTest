(this.webpackJsonp=this.webpackJsonp||[]).push([["shyim-api-test"],{"7HL+":function(t,e,s){"use strict";s.r(e);s("Qv14");var i=s("WK5i"),n=s.n(i);const{Component:a,Mixin:c}=Shopware;a.register("shyim-api-test-button",{template:n.a,props:["btnLabel"],inject:["shyimApiTest"],mixins:[c.getByName("notification")],data:()=>({isLoading:!1,isSaveSuccessful:!1}),computed:{pluginConfig(){let t=this.$parent.$parent.$parent.actualConfigData;return t?t.null:this.$parent.$parent.$parent.$parent.actualConfigData.null}},methods:{saveFinish(){this.isSaveSuccessful=!1},check(){this.isLoading=!0,this.shyimApiTest.check(this.pluginConfig).then(t=>{t.success?(this.isSaveSuccessful=!0,this.createNotificationSuccess({title:this.$tc("shyim-api-test-button.title"),message:this.$tc("shyim-api-test-button.success")})):this.createNotificationError({title:this.$tc("shyim-api-test-button.title"),message:this.$tc("shyim-api-test-button.error")}),this.isLoading=!1})}}});var o=s("JTqv"),r=s("mMNQ");Shopware.Locale.extend("de-DE",o),Shopware.Locale.extend("en-GB",r)},JTqv:function(t){t.exports=JSON.parse('{"shyim-api-test-button":{"title":"API Test","success":"Verbindung wurde erfolgreich getestet","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Zugangsdaten"}}')},Qv14:function(t,e){const s=Shopware.Classes.ApiService,{Application:i}=Shopware;class n extends s{constructor(t,e,s="shyim-api-test"){super(t,e,s)}check(t){const e=this.getBasicHeaders({});return this.httpClient.post(`_action/${this.getApiBasePath()}/verify`,t,{headers:e}).then(t=>s.handleResponse(t))}}i.addServiceProvider("shyimApiTest",t=>{const e=i.getContainer("init");return new n(e.httpClient,t.loginService)})},WK5i:function(t,e){t.exports='<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ btnLabel }}</sw-button-process>\n</div>\n'},mMNQ:function(t){t.exports=JSON.parse('{"shyim-api-test-button":{"title":"API Test","success":"Connection was successfully tested","error":"Connection could not be established. Please check the access data"}}')}},[["7HL+","runtime"]]]);