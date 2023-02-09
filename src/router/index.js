import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import TwitterPage from '../views/TwitterPage.vue'
import TwitterTweetPage from '../views/TwitterTweetPage.vue'
import TwitterHashtagPage from '../views/TwitterHashtagPage.vue'
import TwitterQuotePage from '../views/TwitterQuotePage.vue'
import TwitterBioPage from '../views/TwitterBioPage.vue'
import TwitterFactPage from '../views/TwitterFactPage.vue'
import TwitterEngagePage from '../views/TwitterEngagePage.vue'
import UsernamePage from '../views/UsernamePage.vue'
import DownCheckPage from '../views/DownCheckPage.vue'
import TwitterTrendsPage from '../views/TwitterTrendsPage.vue'
import DallEPage from '../views/DallEPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DallEPage',
      component: DallEPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/twitter',
      name: 'TwitterPage',
      component: TwitterPage
    },
    {
      path: '/twitter/tweet',
      name: 'TwitterTweetPage',
      component: TwitterTweetPage
    },
    {
      path: '/twitter/hashtag',
      name: 'TwitterHashtagPage',
      component: TwitterHashtagPage
    },
    {
      path: '/twitter/quote',
      name: 'TwitterQuotePage',
      component: TwitterQuotePage
    },
    {
      path: '/twitter/bio',
      name: 'TwitterBioPage',
      component: TwitterBioPage
    },
    {
      path: '/twitter/fact',
      name: 'TwitterFactPage',
      component: TwitterFactPage
    },
    {
      path: '/twitter/engage',
      name: 'TwitterEngagePage',
      component: TwitterEngagePage
    },
    {
      path: '/username-checker',
      name: 'UsernamePage',
      component: UsernamePage
    },
    {
      path: '/down-checker',
      name: 'DownCheckPage',
      component: DownCheckPage
    },
    {
      path: '/twitter/trends',
      name: 'TwitterTrendsPage',
      component: TwitterTrendsPage
    },
    {
      path: '/text-to-art',
      name: 'DallEPage',
      component: DallEPage
    },
  ]
})


// router.beforeEach((to, from, next) => {

//   const isAuth = localStorage.getItem('access_token')

//   if (to.name !== 'LoginPage' && !isAuth) {
//     next({ name: 'LoginPage' })
//   } else if (isAuth && to.name == 'LoginPage') {
//     next({name: 'HomePage'})
//   } else {
//     next()
//   } 
// })

export default router