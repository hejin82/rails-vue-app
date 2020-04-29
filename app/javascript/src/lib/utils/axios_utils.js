import axios from 'axios';
import csrf from './csrf';
import suppressAjaxErrorsDuringNavigation from './suppress_ajax_errors_during_navigation';

axios.defaults.headers.common[csrf.headerKey] = csrf.token;
// Used by Rails to check if it is a valid XHR request
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(config => {
  window.pendingRequests = window.pendingRequests || 0;
  window.pendingRequests += 1;
  return config;
});

axios.interceptors.response.use(
  response => {
    window.pendingRequests -= 1;
    return response;
  },
  err => {
    window.pendingRequests -= 1;
    return Promise.reject(err);
  },
);

let isUserNavigating = false;
window.addEventListener('beforeunload', () => {
  isUserNavigating = true;
});

// Ignore AJAX errors caused by requests
// being cancelled due to browser navigation
axios.interceptors.response.use(
  response => response,
  err => suppressAjaxErrorsDuringNavigation(err, isUserNavigating),
);

export default axios;
