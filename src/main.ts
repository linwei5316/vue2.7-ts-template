import Vue from 'vue';
import router from '@/router';

const app = new Vue({
  el: '#app',
  template: "<router-view />",
  router,
});
