import { createStore } from "vuex";


const store = createStore({
  state: {
    user: {
      data: { name : 'Colin'},
      token: null
    }
  },
  getters: {},
  actions: {},
  mutators: {},
  modules: {},
});

export default store;
