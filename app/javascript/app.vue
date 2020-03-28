<template>
  <div id="app">
    <AppHeader/>
    <app-footer></app-footer>
    <app-button @click="buttonClick">button</app-button>
  </div>
</template>

<script>
import AppHeader from './src/components/app-header.vue'
import AppFooter from './src/components/app-footer.vue'

import AppLogin from './src/components/app-login'

export default {
  data: {

  },
  methods: {
    treeData() {

    }
  },
  components: {
    AppHeader,
    AppFooter,
	  AppLogin
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
