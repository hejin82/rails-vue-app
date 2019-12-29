import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: "Can you say hello?",
      info: null,
      loading: true,
      errored: false
    },
    components: {

    },
    mounted () {
      axios
        .get('/articles.json')
        .then(response => (this.info = response.data))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })
})