import Vue from 'vue/dist/vue.esm'
import VueTagsInput from '@johmun/vue-tags-input';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data() {
      return {
        message: 'sss',
        tag: '',
        tags: [{text: '1'},{text: 'wwwwwwwww'}],
        handlers: [],
        validation: [{
          classes: 'min-length',
          rule: tag => tag.text.length < 4,
        }, {
          classes: 'no-numbers',
          rule: /^([^0-9]*)$/,
        }, {
          classes: 'avoid-item',
          rule: /^(?!Cannot).*$/,
          disableAdd: true,
        }, {
          classes: 'no-braces',
          rule: ({ text }) => text.indexOf('{') !== -1 || text.indexOf('}') !== -1,
        }],
      }
    },
    methods: {
      inputcheck: function(e) {
        console.log(e)
        if (this.tags.length >= 40) {
          alert(40)
        }
      },
      maxtags: function () {
        alert('max')
      }
    },
    components: {
      VueTagsInput
    }
  })
})