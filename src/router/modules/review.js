export default [
  {
    path: '/review',
    name: 'review',
    component: () => import(/* webpackChunkName: 'review' */ '@/components/review/Review'),
  },
];
