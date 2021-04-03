<!-- 轮播子组件页面 -->
<template>
  <transition :name="'carousel-' + direction">
    {{ activeIndex }}
    <div class="g-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "carousel-item",
  mounted() {
    console.log(this.visible, "activeIndex");
  },
  inject: ["activeIndex"],
  data() {
    return {
      index: 0,
      direction: "left"
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
  width: 100%;
}
.carousel-right-leave-active,
.carousel-left-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.carousel-left-enter-active,
.carousel-left-leave-active {
  transition: all 0.7s;
}

.carousel-left-enter {
  transform: translateX(100%);
  opacity: 0;
}

// 设置定位 解决前一个元素离开 后一个元素进入时中间空白的问题
// 并解决 都是浮动后 父元素高度塌陷问题
.carousel-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.carousel-right-enter-active,
.carousel-right-leave-active {
  transition: all 0.7s;
}

.carousel-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.carousel-right-leave-to {
  transform: translateX(100%);
}
</style>
