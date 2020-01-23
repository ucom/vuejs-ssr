import Vue from 'vue'
//import { sync } from 'vuex-router-sync';

import App from './App.vue'
import { createRouter } from './router'

export function createApp() {
  const router = createRouter();
  //sync(router);
  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}