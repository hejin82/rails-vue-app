<template>
  <div>
    <ul class="tree">
      <li v-for="(item, index) in data">
        <div class="tree-node">
          <span class="tree-down" @click="expandTree(item, $event)">
            <span :class="item.children && item.children.length > 0 ? item.expanded ? 'tree-arrow-down' : 'tree-arrow-right' : ''"></span>
          </span>
          <span class="tree-open"></span>
          <span class="box-unchecked inputCheck">
            <input class="check" type="checkbox"/>
          </span>
          <span>{{item.title}}</span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    expandTree(node, ev) {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree ul,
.tree li {
  list-style-type: none;
  text-align: left;
}
.tree .tree-open {
  line-height: 13px;
}
.tree tree-open:after {
  content: "\2013";
  font-style: normal;
}
.tree .tree-close:after {
  content: "+";
  font-style: normal;
}
.tree .tree-open,
.tree .tree-close {
  display: inline-block;
  width: 14px;
  height: 14px;
  text-align: center;
  line-height: 13px;
  border: 1px solid #888888;
  border-radius: 2px;
  background: #FFFFFF;
}
</style>