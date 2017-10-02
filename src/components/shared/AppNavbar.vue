<template>
  <header class="c-navbar">
    <router-link class="c-navbar__logo" 
                 to="/"
                 tag="div">
      <p>FLIP</p><span>BOOKS</span>
    </router-link>
    <router-link class="c-navbar__cart-counter"
                 to="cart"
                 tag="div">
      <p>{{totalItems}}</p>
      <span>
        <img v-if="totalItems <= 0" src="../../assets/shopping-cart-icon-empty.svg" alt="Shopping Cart">
        <img v-else src="../../assets/shopping-cart-icon-filled.svg" alt="Shopping Cart">
      </span>
    </router-link>
  </header>
</template>

<script>
export default {
  computed: {
    totalItems() {
      const inCart = this.$store.getters.getCartItems;
      return inCart.reduce((sum, p) => sum + p.quantity, 0);
    },
  },
};
</script>
