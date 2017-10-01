<template>
  <main class="l-shopping-cart">
    <section v-for="product in products" class="c-cart">
      <div class="c-cart__item">
        <figure class="c-cart__item__image">
          <img v-if="product.imageUrl" v-bind:src="product.imageUrl" alt="Product image">
          <img v-else src="../assets/product_placeholder.svg" alt="Product image">
        </figure>
        <div class="c-cart__item__info">
          <h2>{{product.title}}</h2>
          <p>{{product.author}}</p>
        </div>
        
        <div class="c-cart__item__quantity">
          <h4>Quantidade</h4>
          <button>-</button>
          <input type="number">
          <button>+</button>
        </div>
        <div class="c-cart__item__subtotal">
          <h4>Subtotal</h4>
          <p>R$ 20,90</p>
        </div>
        <p class="c-cart__item__btn--remove">Remover item</p>
      </div>
      <p class="c-cart__btn--keep-shopping">Continuar Comprando</p>
      <div class="c-cart__total">
        <h4>Total</h4>
        <p>R$ 100,00</p>
      </div>
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
