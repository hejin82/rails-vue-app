<template>
  <div id="app">
    <AppHeader/>
    <app-footer></app-footer>
    <app-button @click="buttonClick">button</app-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AppHeader from './src/components/app-header.vue'
import AppFooter from './src/components/app-footer.vue'

@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class App extends Vue {
  message: string = 'Hello'
  onClick(): void {
    window.alert(this.message)
  }
}

</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
