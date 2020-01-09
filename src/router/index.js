import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import ManifestWindow from '../views/ManifestWindow'
import ProjectsWindow from '../views/ProjectsWindow'
import ShopWindow from '../views/ShopWindow'
import ContactWindow from '../views/ContactWindow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/manifest',
    name: 'manifest',
    component: ManifestWindow
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsWindow
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopWindow
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactWindow
  }
]

routes.forEach(route => {
  route.meta = {}
  route.meta.component = route.component
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('openWindow', {
    to: to.meta.component,
    avoidRouter: true
  })
    .then(() => next())
})

export function routeTo (component) {
  const route = routes.find(route => route.meta.component === component)
  if (route) router.replace({ name: route.name }).catch(() => {})
}
export default router
