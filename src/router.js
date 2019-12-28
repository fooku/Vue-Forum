import Vue from 'vue'
import VueRouter from 'vue-router'

import PageHome from './pages/PageHome.vue'
import PageThreadShow from '@/pages/PageThreadShow.vue'
import PageForum from '@/pages/PageForum.vue'
import PageCategory from '@/pages/PageCategory.vue'

import PageNotFound from '@/pages/PageNotFound.vue'

Vue.use(VueRouter)

export const router = new VueRouter({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'PageForum',
      component: PageForum,
      props: true
    },
    {
      path: '/category/:id',
      name: 'PageCategory',
      component: PageCategory,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    }
  ]
})
