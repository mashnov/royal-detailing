import Vue from 'vue';
import VueRouter from 'vue-router';

import appointment from './modules/appointment';
import contacts from './modules/contacts';
import review from './modules/review';
import service from './modules/service';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    ...appointment,
    ...service,
    ...contacts,
    ...review,
  ],
});
