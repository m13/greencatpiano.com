import {addMessages, init, getLocaleFromQueryString} from 'svelte-i18n';

import en from '../data/en.json';
import es from '../data/es.json';
// import ja from '../data/ja.json';

addMessages('en', en);
addMessages('es', es);
// addMessages('ja', ja);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromQueryString('lang')
});
