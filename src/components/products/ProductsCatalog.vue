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
  data() {
    return {
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
  components: {
    AppProduct: Product,
  },
};
</script>
