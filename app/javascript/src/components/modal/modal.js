import Vue from 'vue';

export const AppModal = Vue.extend({
  name: 'app-modal',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {

  },
  mounted() {
    this.listenOnRoot('show::modal', this.showHandler)
    this.listenOnRoot('hide::modal', this.hideHandler)
  }
});