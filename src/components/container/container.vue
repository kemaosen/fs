<!-- 页面 -->
<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GContainer",
  mounted() {
    this.$children.forEach(element => {
      if (element.$options.name === "GAside") {
        this.containerClass.hanSider = true;
      }
    });
  },
  data() {
    return {
      containerClass: { hanSider: false }
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hanSider {
    flex-direction: row;
  }
}
</style>
