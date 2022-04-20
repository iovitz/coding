import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('views/Index/index.vue'),
  },
  {
    path: '/login',
    component: () => import('views/Login/index.vue'),
  },
  {
    path: '/user',
    component: () => import('views/User/index.vue'),
  },
  {
    path: '/foundlist',
    component: () => import('views/FoundList/index.vue'),
  },
  {
    path: '/:w+',
    component: () => import('views/NotFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token ? true : false
  if (to.path === '/login') {
    isLogin ? router.push('/index') : next()
  } else {
    isLogin ? next() : router.push('login')
  }
})

export default router
