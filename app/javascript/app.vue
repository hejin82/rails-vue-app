<template>
  <div id="app">
    <AppHeader/>
    <div class="container-fluid">
        <button class="btn btn-primary">button</button>
        <div class="container">
            <AppTree :data="treeData"/>
        </div>
        test checkbox:
        <form role="form">
          <div class="form-check abc-checkbox">
            <input class="form-check-input" id="checkbox1" type="checkbox">
            <label class="form-check-label" for="checkbox1">
              Check me out
            </label>
          </div>
        </form>
        <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './src/components/app-header.vue'
import AppFooter from './src/components/app-footer.vue'

export default {
  data: {

  },
  methods: {
    treeData() {

    }
  },
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
