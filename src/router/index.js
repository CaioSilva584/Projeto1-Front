import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import ViewCourse from "../views/ViewCourseNatacao.vue"
import AddResourse from "../views/AddResourses.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cursos/:cursoId',
      name: 'Curso',
      component: ViewCourse,
    },
    {
      path: '/recursos',
      name: 'Recursos',
      component: AddResourse,
    },
  ]
})

export default router