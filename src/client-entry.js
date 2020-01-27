import { createApp } from './app.js';

const { app, router, store } = createApp()

// this assumes App.vue template root element has `id="app"`
router.onReady(() => {
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }
  app.$mount('#app')
});

// it activates HMR and executes then webpack-dev-server will be run with hot property
if (module.hot) {
  console.log('activating hot-reload');
  const api = require('vue-hot-reload-api');
  const Vue = require('vue');
  api.install(Vue);
  if (!api.compatible) {
    throw new Error(
      'vue-hot-reload-api is not compatible with the version of Vue you are using.',
    );
  }
  module.hot.accept();
} else {
	console.log('vue-hot-reload-api not present');
}