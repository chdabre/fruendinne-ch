import Vue from 'vue'
import VueRouter from 'vue-router'
import ManifestWindow from '../views/ManifestWindow'
import store from '../store/index'
import ProjectsWindow from '../views/ProjectsWindow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/manifest',
    name: 'manifest',
    meta: {
      component: ManifestWindow
    }
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      component: ProjectsWindow
    }
  }
]

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
