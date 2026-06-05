import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Technique from '../pages/Technique.vue'
import Suivi from '../pages/Suivi.vue'
import Integration from '../pages/Integration.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/technique', name: 'Technique', component: Technique },
  { path: '/suivi', name: 'Suivi', component: Suivi },
  { path: '/integration', name: 'Integration', component: Integration }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
