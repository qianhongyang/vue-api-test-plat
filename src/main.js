import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
import router from "@/router/router";


Vue.use(iView);
Vue.config.productionTip = false



new Vue({
  iView,
  router,
  render: h => h(App),
}).$mount('#app')
