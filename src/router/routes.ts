import { RouteRecordRaw } from 'vue-router'
import { RoutesName } from 'src/router/routesName'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RoutesName.DASHBOARD,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/customers',
        name: RoutesName.CUSTOMERS,
        component: () => import('pages/customer/CustomersPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: RoutesName.NOT_FOUND,
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
