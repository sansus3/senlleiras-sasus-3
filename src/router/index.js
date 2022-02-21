import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/solicitud-senlleira',
    name: 'SolicitudSenlleira',
    component: () => import('../views/senlleira/Solicitud.vue')
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: () => import('../views/Catalogo.vue')
  },
  {
    path: `/catalogo-:id`,
    name: 'CatalogoSenlleira',
    component: () => import('@/views/senlleira/Mostrar.vue')
  },
  {
    path: '/mapas',
    name: 'Mapas',
    component: () => import('../views/Mapas.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/form/Form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
