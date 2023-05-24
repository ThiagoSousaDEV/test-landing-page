import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },


  {
    path: '/teste',
    name: 'teste',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Teste.vue')
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
