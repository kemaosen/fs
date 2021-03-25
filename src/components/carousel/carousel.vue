<!-- 轮播组件页面 -->
<template>
  <div class="g-carousel">
    <div class="g-carousel-window" ref="gWindow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "carousel",
  mounted() {
    // 给每个子元素添加一个下标
    this.$children.forEach((children, index) => {
      children.index = index;
    });
  },
  provide() {
    // 向子元素 注入默认展示的那个轮播图
    return { activeIndex: () => this.initialIndex };
  },
  props: {
    initialIndex: {
      type: [String, Number]
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.g-carousel {
  display: inline-block;

  &-window {
    min-height: 150px;
    overflow: hidden;
    width: 200px;
    display: flex;
    position: relative;
  }
}
</style>
