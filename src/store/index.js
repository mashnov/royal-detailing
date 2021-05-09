import Vue from 'vue';
import Vuex from 'vuex';

import reception from './reception';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    reception,
  },
});
