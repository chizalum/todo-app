import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tasksView from '../views/tasks.vue'
import registerView from '../views/register.vue'
import newtaskView from '../views/newtask.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: tasksView
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  },
  {
    path: '/newtask',
    name: 'newtask',
    component: newtaskView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
