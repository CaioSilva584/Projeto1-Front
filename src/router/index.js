import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import ViewCourse from "../views/ViewCourseNatacao.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cursos',
      name: 'Curso',
      component: ViewCourse,
    },
  ]
})

export default router