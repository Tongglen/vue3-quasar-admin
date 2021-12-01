import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:"/dashboard/analysis",
    children: [{
      path: '/dashboard/analysis',
      component: () => import('pages/dashboard/analysis/index.vue')
    }],
  },
  //login
  {
    path: "/login",
    name: "login",
    component: () => import("pages/login/Login.vue"),
  },
];

export default routes;
