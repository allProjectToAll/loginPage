import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import gysSysterm from '@/components/gysSysterm'
import hxqySysterm from '@/components/hxqySysterm'
import yhSysterm from '@/components/yhSysterm'
import dbgsSysterm from '@/components/dbgsSysterm'
import jrSysterm from '@/components/jrSysterm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/gysSysterm',
      name: 'gysSysterm',
      component: gysSysterm
    },
    {
      path: '/hxqySysterm',
      name: 'hxqySysterm',
      component: hxqySysterm
    },
    {
      path: '/yhSysterm',
      name: 'yhSysterm',
      component: yhSysterm
    },
    {
      path: '/dbgsSysterm',
      name: 'dbgsSysterm',
      component: dbgsSysterm
    },
    {
      path: '/jrSysterm',
      name: 'jrSysterm',
      component: jrSysterm
    }
  ]
})
