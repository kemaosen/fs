<!-- 页面 -->
<template>
  <div class="tabs-header" ref="tabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DistanceTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:value", (item, vm) => {
      let tabsHead = this.$refs.tabsHead.getBoundingClientRect();
      let { width, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = width + "px";
      this.$refs.line.style.left = left - tabsHead.left + "px";
    });
  }
};
</script>

<style scoped lang="scss">
@import "../var";

.tabs-header {
  display: flex;
  height: $tabs-toast-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color-ddd;

  > .line {
    transition: all 350ms;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $color-primary;
  }
  // 去除左边的间隙
  & > .tabs-item:first-child {
    padding-left: 0;
  }
  > .action-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
