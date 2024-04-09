import { createRouter, createWebHistory } from 'vue-router'
import ViewTasks from '../views/ViewTasks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewTasks
    },
    {
      path: '/tasks',
      name: 'add',
      component: () => import('../views/AddTask.vue')
    },
    {
      path: '/tasks/:id',
      name: 'edit',
      component: () => import('../views/UpdateTask.vue')
    }
  ]
})

export default router
