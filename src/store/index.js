import Vue from 'vue';
import Vuex from 'vuex';

import appointment from './appointment';
import main from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    appointment,
    main,
  },
});
