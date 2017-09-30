<template>
  <main class="l-shopping-cart">
    <section v-for="product in products" class="c-cart">
      <div class="c-cart-item">
        <figure class="c-cart-item__image">
          <img v-if="product.imageUrl" v-bind:src="product.imageUrl" alt="Product image">
          <img v-else src="../assets/product_placeholder.svg" alt="Product image">
        </figure>
        <h2 class="c-cart-item__title">{{product.title}}</h2>
        <p class="c-cart-item__author">{{product.author}}</p>
        <div class="c-cart-item__counter">
          <button>-</button>
          <input type="number">
          <button>+</button>
        </div>
        <div class="c-cart-item__subtotal">
          <h4>Subtotal</h4>
          <p>product.price * item__counter</p>
        </div>
        <p class="c-cart-item__btn--remove">Remover item</p>
      </div>
      <hr>
      <p class="c-cart__btn--keep-shopping">Continuar Comprando</p>
      <p class="c-cart__price">Total</p>
      <p class="c-cart__price">R$ 100,00</p>
      <button class="c-cart__btn--buy">Finalizar</button>
    </section>
  </main>
</template>

<script>
export default {
  name: 'shopping-cart',
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
      ],
    };
  },
};
</script>
