import Vue from 'vue';
import App from '../components/form.vue';
import VueMask from 'v-mask';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';

Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(Vuex);

const stroe = new Vuex.Store({});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    store: stroe,
    render: h => h(App)
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
