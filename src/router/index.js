import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [{
    path: '/',
    component: 'Home'
  },
  {
    path: '/telecom',
    component: 'Telecom'
  },
  {
    path: '/construccion',
    component: 'Construccion'
  },
  {
    path: '/comercio',
    component: 'Comercio'
  },
  {
    path: '/nuestros-clientes',
    component: 'NuestrosClientes'
  },
  {
    path: '/historia',
    component: 'Historia'
  },
  {
    path: '/donde',
    component: 'Donde'
  },
  {
    path: '/lo-que-hacemos',
    component: 'LoQueHacemos'
  },
  {
    path: '/principios',
    component: 'Principios'
  },
  {
    path: '/certificaciones',
    component: 'Certificaciones'
  },
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () =>
      import (`@/components/${route.component}.vue`)
  }
})

const router = new Router({
  routes,
  mode: 'history'
})

export default router
