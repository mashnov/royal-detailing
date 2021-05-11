export default [
  {
    path: '/',
    name: 'appointment',
    component: () => import(/* webpackChunkName: 'appointment' */ '@/components/appointment/Appointment'),
  },
];
