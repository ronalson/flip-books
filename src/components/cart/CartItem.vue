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
      <button @click="quantity--">-</button>
      <input type="number" v-model="quantity">
      <button @click="quantity++">+</button>
    </div>
    <div class="c-cart__item__subtotal">
      <h4>Subtotal</h4>
      <p>R$ {{subtotal}}</p>
    </div>
    <p class="c-cart__item__btn--remove">Remover item</p>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    subtotal() {
      return this.item.price * this.quantity;
    },
  },
};
</script>
