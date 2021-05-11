export default [
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: 'service' */ '@/components/service/Service'),
  },
];
