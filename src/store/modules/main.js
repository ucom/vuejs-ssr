import {
  MAIN__ITEM_DELELE,
  MAIN__ITEM_ADD,
  MAIN__ITEM_ADD_ASYNC,
} from '../const/main';
import api from '../api.js';

export default {
  state: {
    log_messages: [{id: 1, text: 'first entry'}],
    flavor: 'vanilla',
    breeds: {},
    items: [
      {
        id: 1,
        title: 'Milk',
      },
      {
        id: 2,
        title: 'Strawberry',
      },
      {
        id: 3,
        title: 'Egg',
      },
    ],
  },
  mutations: {
    add_log(state, text){
      // usage: this.$store.commit('add_log', text)
      const logs = [...state.log_messages]
      logs.push({text})
      state.log_messages = logs
    },
    set_dogs(state, response){
      state.breeds = response.response.data.message
    },
    change_flavor(state, flavor){
      state.flavor = flavor
    },
    [MAIN__ITEM_DELELE](state, { id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
    [MAIN__ITEM_ADD](state, { item }) {
      const items = [...state.items];
      items.push(item);

      state.items = items;
    },
  },
  getters:{
    flavor: state => state.flavor,
    breeds: state => state.breeds,
    log_messages: state => state.log_messages,
  },
  actions: {
    set_dogs({commit}){
      api.getBreeds().then(response => {
        commit('set_dogs', {response});
        commit('add_log', 'fetching dogs')
      })
    },
    change_flavor_slowly({ commit }, {flavor}){
      setTimeout(() => {
        commit('change_flavor', flavor);
      }, 1000);
    },
    [MAIN__ITEM_ADD_ASYNC]({ commit }, { item }) {
      setTimeout(() => {
        commit(MAIN__ITEM_ADD, { item });
      }, 1000);
    },
  },
};
