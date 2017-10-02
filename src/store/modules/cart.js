 /* eslint-disable */
const state = {
  products: [],
};

const mutations = {
  'ADD_TO_CART': function (state, productId) {
    const record = state.products.find(p => p.id === productId);
    if (record) {
      record.quantity++;
    } else {
      state.products.push({
        id: productId,
        quantity: 1,
      });
    }
  },
  'REMOVE_FROM_CART': function (state, productId) {
    state.products = state.products.filter(p => p.id !== productId);
  },
  'SUBTRACT_FROM_CART': function (state, { productId }) {
    const record = state.products.find(p => p.id === productId);
    if (record && record.quantity === 1) {
      state.products = state.products.filter(p => p.id !== productId);
    } else if (record) {
      record.quantity--;
    }
  },
};

const actions = {
  addToCart: ({ commit, state }, productId) => {
    commit('ADD_TO_CART', productId);
  },
  removeFromCart: ({ commit }, productId) => {
    commit('REMOVE_FROM_CART', productId);
  },
  subtractFromCart: ({ commit }, productId) => {
    commit('SUBTRACT_FROM_CART', productId);
  },
};

const getters = {
  getCartItems(state, getters) {
    return state.products.map(products => {
      const record = getters.products.find(element => element.id == products.id);
      return {
        id: products.id,
        quantity: products.quantity,
        price: record.price,
        title: record.title,
        author: record.author,
        imageUrl: record.imageUrl,
      }
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};

