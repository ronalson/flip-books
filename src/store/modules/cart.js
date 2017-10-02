 /* eslint-disable */
const state = {
  products: [],
};

const mutations = {
  'ADD_TO_CART': function (state, product) {
    const record = state.products.find(p => p.id === product.id);
    if (!record) {
      state.products.push({
        id: product.id,
        title: product.title,
        author: product.author,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1,
      });
    } else {
      record.quantity++;
    }
  },
  'REMOVE_FROM_CART': function (state, productId) {
    state.products = state.products.filter(p => p.id !== productId);
  },
  'SUBTRACT_FROM_CART': function (state, productId) {
    const record = state.products.find(p => p.id === productId);
    if (record && record.quantity === 1) {
      state.products = state.products.filter(p => p.id !== productId);
    } else if (record) {
      record.quantity--;
    }
  },
};

const actions = {
  addToCart: ({ commit, state }, product) => {
    const record = state.products.find(p => p.id === product.id);

    if (!record || record.quantity < 10) {
      commit('ADD_TO_CART', product);
    }
  },
  removeFromCart: ({ commit }, productId) => {
    commit('REMOVE_FROM_CART', productId);
  },
  subtractFromCart: ({ commit }, productId) => {
    commit('SUBTRACT_FROM_CART', productId);
  },
};

const getters = {
  getCartItems: state => state.products,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

