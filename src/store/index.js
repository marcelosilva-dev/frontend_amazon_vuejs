import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    token: "",
    loggedIn: false,
  },
  mutations: {
    SIGN_IN(state, user) {
      state.id = user.id;
      state.name = user.name;
      state.email = user.email;
      state.phone = user.phone;
      state.token = user.token;
      state.loggedIn = user.status;
    },
    SIGN_OUT(state) {
      state.id = 0;
      state.name = "";
      state.email = "";
      state.phone = "";
      state.token = "";
      state.loggedIn = false;
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit("SIGN_IN", user);
    },
    signOut({ commit }) {
      commit("SIGN_OUT");
    },
  },
  getters: {
    user: (state) => state,
  },
});

export default store;
