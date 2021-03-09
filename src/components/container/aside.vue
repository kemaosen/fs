<!-- 页面 -->
<template>
  <div class="aside" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GAside",
  props: {
    width: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.aside {
  height: 100%;
}
</style>
