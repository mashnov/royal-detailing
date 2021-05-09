import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueClipboards from 'vue-clipboards';
import { isProd } from '@/helpers/env';
import { lockKeyboardScroll } from '@/helpers/scroll';

import App from './App.vue';

import store from './store';

Vue.config.silent = isProd;
Vue.config.devtools = !isProd;
Vue.config.performance = !isProd;
Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueClipboards);

lockKeyboardScroll();

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
