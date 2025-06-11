import { createRouter, createWebHistory } from 'vue-router'

// ページコンポーネントのインポート
import Home from '../pages/Home.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Works from '../components/Works.vue'
import Contact from '../components/Contact.vue'
import Skills from '../components/Skills.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hero', name: 'Hero', component: Hero },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/works', name: 'Works', component: Works },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
