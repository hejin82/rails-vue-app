import Vue from 'vue/dist/vue.esm'

Vue.component('todo-item', {
  template: '<li>todo</li>'
})
Vue.component('todo-item1', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div>
        <h5>{{post.title}}</h5>
        <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
        <div v-html="post.content"></div>
    </div>
    `
})
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: 'message',
      divShow: true,
      todoList: [
        { id: 0, text: 'todo1'},
        { id: 1, text: 'todo2'},
        { id: 2, text: 'todo3'}
      ],
      posts: [
        { id: 0, title: 'blog1', content: '<h1>content</h1>'},
        { id: 1, title: 'blog2', content: '<h1>content</h1>'}
      ],
      postFontSize: 1,
    },
    methods: {
      showDiv: function () {
        this.divShow = !this.divShow
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroyed() {
      console.log('destroyed')
    }
  })
})