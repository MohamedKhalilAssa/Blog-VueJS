import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/about.vue'
import Contact from '../views/Contact.vue'
import PostDetails from '../views/postsFolder/postDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/post/:id',
    name:'post',
    component: PostDetails,
    props:true
  },
  {
    path:'/about',
    name:'About',
    component: About,
  },
  {
    path:'/Contact',
    name:'contact',
    component: Contact,
  },
  // 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
