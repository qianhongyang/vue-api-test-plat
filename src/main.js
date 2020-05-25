import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
import 'view-design/dist/styles/iview.css'
import router from "@/router/router";
import i18n from '@/i18n/i18n'
import store from '@/store'
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import axios from "@/libs/api.request";
import Mock from '@/mock'

Vue.use(iView);
Vue.config.productionTip = false;

require('@/mock/index.js');//此部分引入的是我们所编写的mockjs文档

new Vue({
  iView,
  router,
  i18n,
  store,
  NProgress,
  axios,
  Mock,
  render: h => h(App),
}).$mount('#app');
