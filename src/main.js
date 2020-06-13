import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
// import config from '@/config'
import routers from "@/router/routers";
import i18n from '@/i18n/i18n'
import store from '@/store'
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import axios from "@/libs/api.request";
import Mock from '@/mock'
import '@/my-theme/index.less';
import echarts from 'echarts';

Vue.use(iView);
Vue.use(echarts);
Vue.config.productionTip = false;
/**
 * @description 全局注册应用配置
 */
// Vue.prototype.$config = config;

require('@/mock/index.js');//此部分引入的是我们所编写的mockjs文档

new Vue({
  iView,
  router:routers,
  i18n,
  store,
  NProgress,
  axios,
  Mock,
  echarts,
  render: h => h(App),
}).$mount('#app');
