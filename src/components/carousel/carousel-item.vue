<!-- 轮播子组件页面 -->
<template>
  <transition name="carousel">
    {{ activeIndex }}
    <div class="g-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "carousel-item",
  mounted() {},
  inject: ["activeIndex"],
  data() {
    return {
      index: 0
    };
  },
  computed: {
    visible() {
      return this.index === parseInt(this.activeIndex());
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.g-carousel-item {
  box-sizing: border-box;
}
.carousel-enter-active,
.carousel-leave-active {
  transition: all 1s;
}
.carousel-enter {
  transform: translateX(100%);
}
// 设置定位 解决前一个元素离开 后一个元素进入时中间空白的问题
// 并解决 都是浮动后 父元素高度塌陷问题
.carousel-leave-to {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-100%);
}
</style>
<style>
.g-carousel-item > * {
  box-sizing: border-box;
}
</style>
