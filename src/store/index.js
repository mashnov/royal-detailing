import Vue from 'vue';
import Vuex from 'vuex';

import appointment from './appointment';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    appointment,
  },
});
