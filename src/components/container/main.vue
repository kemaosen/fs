<!-- 页面 -->
<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceMain"
};
</script>

<style scoped lang="scss">
.main {
  flex-grow: 1;
}
</style>
