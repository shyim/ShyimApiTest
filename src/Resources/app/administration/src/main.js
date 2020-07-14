import './service/shyimApiTestService';
import './component/shyim-api-test-button';

import localeDE from './snippet/de_DE.json';
import localeEN from './snippet/en_GB.json';
Shopware.Locale.extend('de-DE', localeDE);
Shopware.Locale.extend('en-GB', localeEN);
