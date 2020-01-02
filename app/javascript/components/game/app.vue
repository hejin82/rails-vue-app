<template>
  <div id="app">
    <top-bar :turn="true" :current-player-index="state.currentPlayerIndex" :players="state.players" />
    <dialog-box command="confirmation" :cancellable="true" @cancel="msg = 'cancelled'" @ok="msg = 'confirmed'">
      <span slot="icon">!</span>
      <span slot="message">Do you confirm</span>
    </dialog-box>
    <p>output:{{ msg }}</p>
  </div>
</template>

<script>
import { state } from './state';

export default {
  data: function() {
    return {
      state,
      msg: 'undefined'
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
