import { RouteRecordRaw } from 'vue-router'
import { RoutesName } from 'src/router/routesName'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RoutesName.HOME,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Temporary route to customers as no dashboard page is ready yet
      {
        path: '',
        name: RoutesName.DASHBOARD,
        component: () => import('pages/dashboard/DashboardPage.vue')
      },
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
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: RoutesName.NOT_FOUND,
        component: () => import('pages/404/404Page.vue')
      }
    ]
  }
]

export default routes
