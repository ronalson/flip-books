import Vue from 'vue';
import Router from 'vue-router';
import ProductsCatalog from '@/components/ProductsCatalog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: ProductsCatalog,
    },
  ],
});
