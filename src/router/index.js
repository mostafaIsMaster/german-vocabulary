import { createWebHistory, createRouter } from "vue-router";


import GermanWords from "../components/GermanWords.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/german' },
    {
      path: '/german',
      name: 'german',
      component: GermanWords,
      meta: { requiresAuth: true }
    },
 
  ]
})
export default router