<!-- 页面 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceTabsBody",
  inject: ["eventBus"]
};
</script>

<style scoped lang="scss"></style>
