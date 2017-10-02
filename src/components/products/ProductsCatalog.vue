<template>
  <main class="l-products-list">
    <app-product v-for="product in products" 
                 :product="product"
                 :key="product.id"></app-product>
  </main>
</template>

<script>
import Product from './Product';

export default {
  components: {
    AppProduct: Product,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
