import { createStore } from "vuex";
import axios from "axios";

const store = new createStore({
  actions: {
    async loadAll({ commit }) {
      axios.get("http://localhost:3005/Alldata").then((data) => {
        console.log(data.data);
        let posts = data.data;
        commit("setData", posts);
      });
    },
  },

  mutations: {
    setData(state, payload) {
      state.cards = payload;
    },
  },

  state: {
    cards: [],
  },
});

export default store;
