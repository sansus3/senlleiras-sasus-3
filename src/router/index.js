import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
<<<<<<< HEAD
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
=======
  },  
>>>>>>> 6d30d453eb1eaa03d62f0ad277f95c3ce23d835c
  {
    path: `/arb-:id`,
    name: 'Senlleira',
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
<<<<<<< HEAD
=======
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
  },
  // {path: '/ficha',
  //   name: 'Ficha',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/fichas/FichaTecnica.vue')
  // }
>>>>>>> 6d30d453eb1eaa03d62f0ad277f95c3ce23d835c
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
