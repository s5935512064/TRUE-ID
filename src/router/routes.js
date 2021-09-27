import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'createcampaign', component: () => import('src/pages/add-campaign/Campaign.vue') },
      { path: 'setlocation', component: () => import('src/pages/set-location/LocationSet.vue') },
      { path: 'coincreate', component: () => import('src/pages/add-coin/CoinMake.vue') },
      { path: 'prizecreate', component: () => import('src/pages/add-prize/PrizeMake.vue') },
      { path: 'permission', component: () => import('src/pages/set-permission/Permission.vue') },
      { path: 'playerlist', component: () => import('src/pages/list-player/PlayerList.vue') },
      
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
