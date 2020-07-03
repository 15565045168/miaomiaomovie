import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from '../views/movie.vue'
import center from '../views/center.vue'
import me from '../views/me.vue'
import mm from '../views/xiangqing.vue'
import city from '../components/city.vue'
import jijiang from '../components/jijiang.vue'
import zhengzai from '../components/zhengzai.vue'
import search from '../components/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: movie,
    children: [
      {
        path: '/movie/city',
        component: city
      },
      {
        path: '/movie/jijiang',
        component:jijiang
      },
      {
        path: '/movie/zhengzai',
        component:zhengzai
      },
      {
       path:'/movie/search',
       component:search
      },
      {
        path: '/movie',
        redirect: '/movie/jijiang'
      }
    ]
  },
  {
    path: '/center',
    component: center
  },
  {
    path:'/mm/:move',
    component: mm
  },
  {
    path: '/me',
    component: me
  },
  
  {
    path: '/',
    redirect: '/movie'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
