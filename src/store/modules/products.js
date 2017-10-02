/* eslint-disable */
import products from '../../data/products';

const state = {
  products: [],
};

const mutations = {
  'SET_PRODUCTS': function (state, products) {
    state.products = products;
  },
};

const actions = {
  initProducts: ({ commit }) => {
    commit('SET_PRODUCTS', products);
  },
  buyProducts: ({ commit }, order) => {
    commit(); // this will be commited to store/module/cart
  },
};

const getters = {
  products: state => state.products,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
