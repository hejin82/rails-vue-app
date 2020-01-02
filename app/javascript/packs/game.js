import Vue from 'vue/dist/vue.esm';
import App from '../components/game/app.vue';
import { getWorldRatio } from '../components/game/utils';

Vue.component('top-bar', {
  props: ['players', 'currentPlayerIndex', 'turn'],
  created() {
    console.log(this.players, this.currentPlayerIndex, this.turn);
  },
  template: `<div class="top-bar" :class="'player-' + currentPlayerIndex">
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <img class="arrow" src="svg/turn.svg" />
      <div class="turn">Turn {{ turn }}</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>`
});
Vue.component('dialog-box', {
  props: {
    command: String,
    cancellable: Boolean
  },
  methods: {
    cancel() {
      this.$emit('cancel', this.command);
    },
    ok() {
      this.$emit('ok', this.command);
    }
  },
  template: `
    <div>
      <div>
        <slot name="icon"></slot>
      </div>
      <slot name="message"></slot>
      <div>
        <button v-if="cancellable" @click="cancel()">Cancel</button>
        <button @click="ok()">OK</button>
      </div>
    </div>
  `
});
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount();
  document.body.appendChild(app.$el);
});

document.addEventListener('resize', () => {
  console.log(getWorldRatio());
});
