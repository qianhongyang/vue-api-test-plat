import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
import router from "@/router/router";
import i18n from '@/i18n/i18n'


Vue.use(iView);
Vue.config.productionTip = false;



new Vue({
  iView,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
