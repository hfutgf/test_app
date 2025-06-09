import { lazy } from 'react';

const Travles = lazy(() => import('@/modules/travels/pages/Travels'));

const routes = [
  {
    path: '/',
    component: Travles,
  },
];

export { routes };
