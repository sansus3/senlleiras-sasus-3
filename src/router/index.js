import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/js6',
    name: 'JavaScript6',
    component: () => import('../views/javascript/JavaScript6.vue')
  },
  {
    path: '/solicitud-senlleira',
    name: 'SolicitudSenlleira',
    component: () => import('../views/senlleira/Solicitud.vue')
  },
  {
    path: '/catalogo-senlleira',
    name: 'CatalogoSenlleira',
    component: () => import('../views/senlleira/Catalogo.vue')
  },
  {
    path: `/arb-:id`,
    name: 'Senlleira',
    component: () => import('@/views/senlleira/Mostrar.vue')
  },
  {
    path: '/mapa-senlleiras',
    name: 'MapaSenlleiras',
    component: () => import('../views/senlleira/MapaSenlleiras.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
