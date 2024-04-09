import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/login.vue'
import patient from './patient'
import recover from './recover'
import setting from './setting'
import admin from './admin'
import student from './student'

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  ...patient,
  ...recover,
  ...setting,
  ...admin,
  ...student
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
