<template>
  <main class="l-shopping-cart">
      <app-cart-item 
          v-if="cartItems"
          v-for="item in cartItems"
          :item="item"
          :key="item.id"></app-cart-item>
      <div v-if="!cartItems.length" class="cart-empty">
        No products :(
      </div>
    <section  class="c-cart">
      <p class="c-cart__btn--keep-shopping">Continuar Comprando</p>
      <div class="c-cart__total">
        <h4>Total</h4>
        <p>R$ {{totalOrder}}</p>
      </div>
      <button class="c-cart__btn--buy">Finalizar</button>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from './CartItem';

export default {
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
    }),
    // totalOrder() {
    //   return this.order.reduce((total, item) => total + item.price, 0).toFixed(2);
    // },
  },
  methods: mapActions([
    'addToCart',
    'removeFromCart',
    'subtractFromCart',
  ]),
  components: {
    AppCartItem: CartItem,
  },
};
</script>
