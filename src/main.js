// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { Button, Container, Header, Main, Footer, Icon, Link, MessageBox, Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import 'vm'
Vue.prototype.$axios = axios;
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Icon);
Vue.use(Link);
Vue.use(Loading);
// Vue.use(MessageBox);
Vue.component(MessageBox.name, MessageBox);   // use方式会有自动弹窗
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
