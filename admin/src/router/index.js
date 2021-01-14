import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import TabHost from '../views/TabHost.vue'
import TabProfile from '../views/TabProfile.vue'
import TabSnippet from '../views/TabSnippet.vue'
const routes = [
  {
    path: '/',
    redirect: '/host',
    name: 'Home',
    component: Layout,
    children: [
      { path: 'account', component: TabHost },
      { path: 'host', component: TabHost },
      { path: 'profile', component: TabProfile },
      { path: 'snippet', component: TabSnippet }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
