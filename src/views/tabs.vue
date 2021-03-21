<!-- 页面 -->
<template>
  <div>
    <g-tabs
      v-model="select"
      style="padding-left:30px"
      direction="vertical"
      @change="handleTabsChange"
    >
      <g-tabs-head>
        <g-tabs-item name="美女"
          ><g-icon name="thumbs-up"></g-icon>美女</g-tabs-item
        >
        <g-tabs-item name="财经" disabled>财经</g-tabs-item>
        <g-tabs-item name="宠物">宠物</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="美女">关于美女的</g-tabs-pane>
        <g-tabs-pane name="财经">关于财经的</g-tabs-pane>
        <g-tabs-pane name="宠物">关于宠物的</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
export default {
  name: "tabs",
  mounted() {},
  data() {
    return {
      select: "宠物"
    };
  },
  methods: {
    handleTabsChange(vm) {
      console.log(vm);
    }
  }
};
</script>
<style lang="scss" scoped></style>
