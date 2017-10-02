import Vue from 'vue';
import Router from 'vue-router';
import ProductsCatalog from '@/components/products/ProductsCatalog';
import ShoppingCart from '@/components/cart/ShoppingCart';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ProductsCatalog,
    },
    {
      path: '/cart',
      component: ShoppingCart,
    },
  ],
});
