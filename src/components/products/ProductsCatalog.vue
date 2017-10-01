<template>
  <main class="l-products-list">
    <section v-for="product in products" class="c-product">
      <figure class="c-product__image">
        <img v-if="product.imageUrl" v-bind:src="product.imageUrl" alt="Product image">
        <img v-else src="../../assets/product_placeholder.svg" alt="Product image">  
      </figure>
      <h2 class="c-product__title">{{product.title}}</h2>
      <p class="c-product__author">{{product.author}}</p>
      <p class="c-product__price">R$ {{product.price}}</p>
      <a class="c-product__details-toggle" 
         @click="toggleDetails"
         ><span v-if="!showDetails">Abrir detalhes</span>
          <span v-else>Fechar</span></a>
      <div v-show="showDetails" class="c-product__details">
        <h4>Detalhes</h4>
        <p>{{product.description}}</p>
      </div>
      <button class="c-product__btn--buy">Comprar</button>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      products: [
        {
          id: 0,
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J. K. Rowling',
          description: 'Harry Potter and the Philosopher\'s Stone is the first novel in the Harry Potter series and J. K.Rowling\'s debut novel, first published in 1997 by Bloomsbury.',
          price: 20.90,
          imageUrl: 'https://prodimage.images-bn.com/pimages/9780545582889_p0_v2_s550x406.jpg',
        },
        {
          id: 1,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien.',
          price: 23.90,
          imageUrl: 'https://images.gr-assets.com/books/1372847500l/5907.jpg',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
