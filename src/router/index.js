import {createRouter, createWebHashHistory} from 'vue-router'
import TaskList from '@/views/TaskListPage.vue'
import Home from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/task-list',
    name: 'taskList',
    component: TaskList,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
