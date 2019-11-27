<template>
  <div id="app">
    <AppHeader/>
    <div class="container-fluid">
        <button class="btn btn-primary">button</button>
        <AppTree :data="treeData"/>
        <AppFooter/>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!",
      treeData: [
        {"title": "title1"} ,
        {"title": "title2"} ,
        {"title": "title3"} ,
        {"title": "title4"} ,
        {"title": "title5"} ,
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
