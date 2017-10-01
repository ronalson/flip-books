<template>
  <section class="c-product">
    <figure class="c-product__image">
      <img v-if="product.imageUrl" v-bind:src="product.imageUrl" alt="Product image">
      <img v-else src="../../assets/product_placeholder.svg" alt="Product image">
    </figure>
    <h2 class="c-product__title">{{product.title}}</h2>
    <p class="c-product__author">{{product.author}}</p>
    <p class="c-product__price">R$ {{product.price}}</p>
    <a class="c-product__details-toggle" @click="toggleDetails">
      <span v-if="!showDetails">Abrir detalhes</span>
      <span v-else>Fechar</span>
    </a>
    <div v-show="showDetails" class="c-product__details">
      <h4>Detalhes</h4>
      <p>{{product.description}}</p>
    </div>
    <button class="c-product__btn--buy">Comprar</button>
  </section>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
