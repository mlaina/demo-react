import helpers from './helpers';

export const setupAxios = (axios, store) => {
  axios.interceptors.response.use(null, helpers.error(store));
};
