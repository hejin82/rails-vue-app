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

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount();
  document.body.appendChild(app.$el);
});

document.addEventListener('resize', () => {
  console.log(getWorldRatio());
});
