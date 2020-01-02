<template>
  <div id="app">
    <top-bar :turn="true" :current-player-index="state.currentPlayerIndex" :players="state.players" />
  </div>
</template>

<script>
import { state } from './state';

export default {
  data: function() {
    return {
      state
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
