import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

const Home = () => import('./components/Home.vue');
const About = () => import('./components/About.vue');
const Icecream = () => import('./components/Icecream.vue');
const Dogs = () => import('./components/Dogs.vue');

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: routes.pages.main, component: Home },
      { path: routes.pages.about, component: About },
      { path: routes.pages.icecream, component: Icecream },
      { path: routes.pages.dogs, component: Dogs },
    ],
  });
}