import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6fbc2e53 = () => interopDefault(import('..\\pages\\authors_index.vue' /* webpackChunkName: "pages/authors_index" */))
const _b69f1396 = () => interopDefault(import('..\\pages\\books_index.vue' /* webpackChunkName: "pages/books_index" */))
const _67dce302 = () => interopDefault(import('..\\pages\\publishers_index.vue' /* webpackChunkName: "pages/publishers_index" */))
const _37bf813a = () => interopDefault(import('..\\pages\\authors\\_slug.vue' /* webpackChunkName: "pages/authors/_slug" */))
const _bd5794d0 = () => interopDefault(import('..\\pages\\books\\_slug.vue' /* webpackChunkName: "pages/books/_slug" */))
const _43b5626b = () => interopDefault(import('..\\pages\\publishers\\_slug.vue' /* webpackChunkName: "pages/publishers/_slug" */))
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
    path: "/authors_index",
    component: _6fbc2e53,
    name: "authors_index"
  }, {
    path: "/books_index",
    component: _b69f1396,
    name: "books_index"
  }, {
    path: "/publishers_index",
    component: _67dce302,
    name: "publishers_index"
  }, {
    path: "/authors/:slug?",
    component: _37bf813a,
    name: "authors-slug"
  }, {
    path: "/books/:slug?",
    component: _bd5794d0,
    name: "books-slug"
  }, {
    path: "/publishers/:slug?",
    component: _43b5626b,
    name: "publishers-slug"
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
