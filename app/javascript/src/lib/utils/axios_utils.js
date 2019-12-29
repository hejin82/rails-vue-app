import axios from 'axios';
import csrf from './csrf';

axios.defaults.headers.common[csrf.headerKey] = csrf.token;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(config => {
  window.activeVueResources = window.activeVueResources || 0;
  window.activeVueResources += 1;
  return config;
});

axios.interceptors.response.use(
  config => {
    window.activeVueResources -= 1;
    return config;
  },
  e => {
    window.activeVueResources -= 1;
    return Promise.reject(e);
  },
);

export default axios;