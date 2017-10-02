<template>
  <main class="l-shopping-cart">
    <app-cart-item 
          v-if="cartItems"
          v-for="item in cartItems"
          :item="item"
          :key="item.id"></app-cart-item>
    <div v-if="!cartItems.length" class="c-cart--empty">
        <h3>Você ainda não adicionou produtos ao carrinho.<span>:(</span></h3>
    </div>
    <section class="c-cart">
      <router-link to="/" class="c-cart__btn--keep-shopping">Continuar Comprando</router-link>
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
    totalOrder() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
                           .toFixed(2);
    },
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
