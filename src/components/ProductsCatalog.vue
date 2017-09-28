<template>
  <div>
    <main v-for="product in products">
      <section class="product">
        <figure class="product__image">
          <img v-if="product.imageUrl" v-bind:src="product.imageUrl" alt="Product image">
          <img v-else src="../assets/product_placeholder.svg" alt="Product image">  
        </figure>
        <h2 class="product__title">{{product.title}}</h2>
        <p class="product__author">{{product.author}}</p>
        <button class="product__cta">Comprar</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'products-catalog',
  data() {
    return {
      msg: 'My products',
      products: [
        {
          id: 0,
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J. K. Rowling',
          description: 'Harry Potter and the Philosopher\'s Stone is the first novel in the Harry Potter series and J. K.Rowling\'s debut novel, first published in 1997 by Bloomsbury.',
          price: 20,
        },
        {
          id: 1,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien.',
          price: 23,
        },
      ],
    };
  },
};
</script>
