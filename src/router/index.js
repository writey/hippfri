import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

Vue.use(Router)
const Login = () => import(/* webpackChunkName: "home" */'@/page/login');
const Home = () => import(/* webpackChunkName: "home" */'@/page/home');
const Item = () => import(/* webpackChunkName: "item" */'@/page/item');
const Score = () => import(/* webpackChunkName: "score" */'@/page/score');

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/item',
      name: 'Item',
      component: Item,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/score',
      name: 'Score',
      component: Score,
      meta: {
        requireAuth: true,
      }
    },
    { path: '/', redirect: '/home' }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

export default router;