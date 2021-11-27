import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f0509df4 = () => interopDefault(import('..\\pages\\battles_index.vue' /* webpackChunkName: "pages/battles_index" */))
const _3e873bb5 = () => interopDefault(import('..\\pages\\characters_index.vue' /* webpackChunkName: "pages/characters_index" */))
const _564630ec = () => interopDefault(import('..\\pages\\deaths_index.vue' /* webpackChunkName: "pages/deaths_index" */))
const _7d724f5e = () => interopDefault(import('..\\pages\\houses_index.vue' /* webpackChunkName: "pages/houses_index" */))
const _6c6b9fc3 = () => interopDefault(import('..\\pages\\mascota_index.vue' /* webpackChunkName: "pages/mascota_index" */))
const _21ebcc2b = () => interopDefault(import('..\\pages\\animals\\_slug.vue' /* webpackChunkName: "pages/animals/_slug" */))
const _231454e7 = () => interopDefault(import('..\\pages\\battles\\_slug.vue' /* webpackChunkName: "pages/battles/_slug" */))
const _42562018 = () => interopDefault(import('..\\pages\\characters\\_slug.vue' /* webpackChunkName: "pages/characters/_slug" */))
const _3e64fce2 = () => interopDefault(import('..\\pages\\houses\\_slug.vue' /* webpackChunkName: "pages/houses/_slug" */))
const _c47a04ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/battles_index",
    component: _f0509df4,
    name: "battles_index"
  }, {
    path: "/characters_index",
    component: _3e873bb5,
    name: "characters_index"
  }, {
    path: "/deaths_index",
    component: _564630ec,
    name: "deaths_index"
  }, {
    path: "/houses_index",
    component: _7d724f5e,
    name: "houses_index"
  }, {
    path: "/mascota_index",
    component: _6c6b9fc3,
    name: "mascota_index"
  }, {
    path: "/animals/:slug?",
    component: _21ebcc2b,
    name: "animals-slug"
  }, {
    path: "/battles/:slug?",
    component: _231454e7,
    name: "battles-slug"
  }, {
    path: "/characters/:slug?",
    component: _42562018,
    name: "characters-slug"
  }, {
    path: "/houses/:slug?",
    component: _3e64fce2,
    name: "houses-slug"
  }, {
    path: "/",
    component: _c47a04ec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
