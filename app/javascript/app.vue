<template>
  <div id="app">
    <AppHeader/>
    <div class="container-fluid">
        <button class="btn btn-primary">button</button>
        <AppTree :data="treeData"/>
        <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './src/components/AppHeader.vue'
import AppFooter from './src/components/app-footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
