import Vue from 'vue';
import App from './App.vue';
import registerComponents from '@/components';

Vue.config.productionTip = false;

registerComponents(Vue);

new Vue({
  render: h => h(App),
}).$mount('#app');
