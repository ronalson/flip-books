<template>
  <div class="c-cart__item">
    <figure class="c-cart__item__image">
      <img v-if="item.imageUrl" v-bind:src="item.imageUrl" alt="Product image">
      <img v-else src="../../assets/product_placeholder.svg" alt="Product image">
    </figure>
    <div class="c-cart__item__info">
      <h2>{{item.title}}</h2>
      <p>{{item.author}}</p>
    </div>

    <div class="c-cart__item__quantity">
      <h4>Quantidade</h4>
      <button @click="subtractFromCart(item.id)">-</button>
      <input type="number" :value="item.quantity">
      <button @click="addToCart(item.id)">+</button>
    </div>
    <div class="c-cart__item__subtotal">
      <h4>Subtotal</h4>
      <p>R$ {{subtotal}}</p>
    </div>
    <p class="c-cart__item__btn--remove"
       @click="removeFromCart(item.id)">Remover item</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['item'],
  computed: {
    subtotal() {
      const total = this.item.price * this.item.quantity;
      return total.toFixed(2);
    },
  },
  methods: mapActions([
    'addToCart',
    'removeFromCart',
    'subtractFromCart',
  ]),
};
</script>
