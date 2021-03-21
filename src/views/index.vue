<!-- 页面 -->
<template>
  <div class="app-container">
    <g-cascader :source="source"></g-cascader>
    <hr />
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            { name: "杭州", children: [{ name: "上城" }, { name: "下城" }] },
            { name: "嘉兴" },
            { name: "湖州" }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [{ name: "庐阳区" }, { name: "蜀山区" }]
            },
            { name: "六安" },
            { name: "芜湖" }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
}
</style>
