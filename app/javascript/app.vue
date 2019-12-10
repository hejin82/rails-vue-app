<template>
  <div id="app">
    <AppHeader/>
    <div class="container-fluid">
        <button class="btn btn-primary">button</button>
        <AppTree :data="treeData"/>
        <app-footer></app-footer>
        <app-button @click="buttonClick">button</app-button>
    </div>
  </div>
</template>

<script>
import AppHeader from './src/components/AppHeader.vue'
import AppFooter from './src/components/app-footer.vue'
import AppButton from './src/components/app-button.vue'

export default {
  methods: {
    buttonClick() {
      alert('test')
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppButton
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
