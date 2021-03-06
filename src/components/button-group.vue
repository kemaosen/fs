<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceGroupButton",
  mounted() {
    // 设置当前组件只能传递 button组件 不能是其他任何东西
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn(
          "g-button-group的子元素应该都是g-button 但是您使用了" +
            node.nodeName.toLowerCase()
        );
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";

.g-button + .g-button-group {
  margin-left: 0.5em;
}

.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  .g-button {
    border-radius: 0;
    /*&:not(:first-child){*/
    // 会将按钮边框重贴 中间的缺少左边的边框
    /*border-left: none;*/
    /*}*/
    &:not(:first-child) {
      margin-left: -1px; //这样会将边框重叠在一起 解决
    }

    &:hover {
      border-color: $button-default-border-color;
      background-color: $button-default-hover-bg;
      position: relative;
      z-index: 2;
    }

    &:focus {
      position: relative;
      z-index: 1;
      background-color: $button-default-action-bg;
      border-color: $button-default-border-color;
      color: $button-default-border-color-hover;
    }

    &:active {
      border-color: $button-default-border-color-hover;
      color: $button-default-border-color-hover;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
