<!-- 页面 -->
<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceSider"
};
</script>

<style scoped lang="scss">
.sider {
  height: 100%;
}
</style>
