export default {
  namespace: 'lists',
  state: {},
  reducers: {
    add(state, { payload: name }) {
      let id = state.reduce((prev, cur) => (prev.id > cur.id ? prev : cur).id);
      id++;
      return [...state, { name, id }];
    },
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
