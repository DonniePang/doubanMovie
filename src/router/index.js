import Vue from 'vue'
import Router from 'vue-router'

import Lists from '@/views/Lists'
import Search from '@/views/Search'
import Subject from '@/views/Subject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/subject/:id',
      name: 'Subject',
      component: Subject
    },
  ]
})
