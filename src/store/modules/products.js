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
