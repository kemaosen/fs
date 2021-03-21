<!-- 页面 -->
<template>
  <div class="app-container">
    <p>{{ selected }}</p>
    <g-cascader
      :source="source"
      :value.sync="selected"
      @change="handlechange"
      placeholder="请选择"
    ></g-cascader>
    <p>11111111111111111111</p>
    <hr />
  </div>
</template>
<script>
import db from "@/components/cascader/db";
function ajax(parentId = 0) {
  let a = db.filter(item => item.parent_id === parentId);
  return a;
}
// const dbData = ajax();
export default {
  name: "index",
  mounted() {
    this.source = ajax();
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  methods: {
    handlechange(value) {
      // this.selected = value;
      console.log(value, "index");
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
}
</style>
