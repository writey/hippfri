import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import(/* webpackChunkName: "home" */'@/page/home');
const Item = () => import(/* webpackChunkName: "item" */'@/page/item');
const Score = () => import(/* webpackChunkName: "score" */'@/page/score');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
