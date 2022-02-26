import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/form/Form.vue')
  },
  {path: '/catalogoad',
    name: 'CatalogoAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views//catalogo/CatalogoAdmin.vue')
  },
  {path: '/menuweb',
    name: 'MenuWeb',
    component: () => import(/* webpackChunkName: "about" */ '../views/menu-top-web/Menuweb.vue')
  },
  {path: '/carrusel',
    name: 'Carrusel',
    component: () => import(/* webpackChunkName: "about" */ '../components/senlleira-components/Carrusel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
