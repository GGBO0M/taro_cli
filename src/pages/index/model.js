// import * as homeApi from './service';

export default {
  namespace: 'index',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    page: 1,
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