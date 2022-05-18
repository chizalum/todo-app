import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tasksView from '../views/taskfolder/tasks.vue'
import registerView from '../views/register.vue'
import newtaskView from '../views/taskfolder/newtask.vue'
import thetasksView from '../views/taskfolder/thetasks.vue'
import addtaskView from '../views/taskfolder/addtask.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  },
  {
    path: '/addtask',
    name: 'addtask',
    component: addtaskView
  },
  {
    path: '/newtask',
    name: 'newtask',
    component: newtaskView
  },
  {
    path: '/thetasks',
    name: 'thetasks',
    component: thetasksView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: tasksView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
