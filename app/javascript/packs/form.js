import Vue from 'vue';
import App from '../components/form.vue';
import VueMask from 'v-mask';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import axios from '../src/lib/utils/axios_utils';

Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(Vuex);

const stroe = new Vuex.Store({
  state: {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      love: 'fun',
      website: ''
    }
  },
  mutations: {
    updateUser(state, user) {
      console.log('updateUser');
      console.log('user:', user);
      console.log('state.user', state.user);
      state.user = user;
    }
  },
  actions: {
    getLoggedInUser(context) {
      console.log('getLoggedInUser');
      axios.get('/forms/1').then(response => {
        context.commit('updateUser', response.data);
      });
    },
    updateUserData(context, payload) {
      console.log('payload', payload);
      const userCopy = { ...context.state.user };
      userCopy[payload.property] = payload.value;
      context.commit('updateUser', userCopy);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    store: stroe,
    render: h => h(App)
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
