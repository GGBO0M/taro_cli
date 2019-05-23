export default {
  namespace: 'global',
  state: {
    haha: 123
  },
  effects: {
  },
  reducers: {
    save(state, { payload }) {
      console.log('save........')
      return { ...state, ...payload };
    },
  },
};