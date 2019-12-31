import Vue from 'vue';
import App from '../components/form.vue';
import VueMask from 'v-mask';
import Vuelidate from 'vuelidate';

Vue.use(VueMask);
Vue.use(Vuelidate);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
