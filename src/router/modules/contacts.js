export default [
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: 'contacts' */ '@/components/contacts/Contacts'),
  },
];
