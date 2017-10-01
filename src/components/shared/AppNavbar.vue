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
      <p>0</p>
      <span><img src="../../assets/shopping-cart-icon.svg" alt="Shopping Cart"></span>
    </router-link>
  </header>
</template>

<script>
export default {

};
</script>
