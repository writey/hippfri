// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { Tabs, TabPane, Button, Container, Header, Main, Footer, Icon, Link, 
  MessageBox, Loading, Select, Option, Row, Input, InputNumber, PageHeader, Form, FormItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import AV from 'leancloud-storage';
import AVinit from './AVinit'
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
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(PageHeader);
Vue.use(Form);
Vue.use(FormItem);
Vue.component(MessageBox.name, MessageBox);   // use方式会有自动弹窗
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false;

AV.init(AVinit);
Vue.prototype.$AV = AV;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
