import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'createcampaign', component: () => import('pages/Campaign.vue') },
      { path: 'setlocation', component: () => import('pages/LocationSet.vue') },
      { path: 'coincreate', component: () => import('pages/CoinMake.vue') },
      { path: 'prizecreate', component: () => import('pages/PrizeMake.vue') },
      { path: 'permission', component: () => import('pages/Permission.vue') },
      { path: 'playerlist', component: () => import('pages/PlayerList.vue') },
      
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },

];

export default routes;
