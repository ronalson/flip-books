import Vue from 'vue';
import Router from 'vue-router';
import ProductsCatalog from '@/components/ProductsCatalog';
import ShoppingCart from '@/components/ShoppingCart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: ProductsCatalog,
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
  ],
});
