import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'home', component: () => import('pages/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  //login
  {
    path: "/login",
    name: "login",
    component: () => import("pages/login/Login.vue"),
  },
];

export default routes;
