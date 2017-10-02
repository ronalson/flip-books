<template>
  <main class="l-shopping-cart">
      <app-cart-item 
          v-for="item in order"
          :item="item"
          :key="item.id"></app-cart-item>
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
import CartItem from './CartItem';

export default {
  data() {
    return {
      order: [
        {
          id: 0,
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J. K. Rowling',
          price: 21.10,
          imageUrl: 'https://prodimage.images-bn.com/pimages/9780545582889_p0_v2_s550x406.jpg',
        },
        {
          id: 1,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          price: 23.90,
          imageUrl: 'https://images.gr-assets.com/books/1372847500l/5907.jpg',
        },
      ],
    };
  },
  computed: {
    totalOrder() {
      return this.order.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
  },
  components: {
    AppCartItem: CartItem,
  },
};
</script>
