<!-- 轮播组件页面 -->
<template>
  <div class="g-carousel">
    <div
      class="g-carousel-window"
      ref="gWindow"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      <slot></slot>
    </div>
    <div class="g-carousel__indicator">
      <span
        v-for="(value, index) in childrenLength"
        :key="value"
        @click="uploadIndex(index)"
        :class="{ active: indexActive === index }"
        >{{ value }}</span
      >
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
      children.direction = this.direction;
    });
    this.childrenLength = this.$children.length;
    this.indexActive = this.initialIndex || 0;
    this.palyAutomatically();
  },
  provide() {
    // 向子元素 注入默认展示的那个轮播图
    return { activeIndex: () => this.indexActive };
  },
  props: {
    // 设置第一展示的轮播的下标
    initialIndex: {
      type: [String, Number]
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 设置轮播的左右方向
    direction: {
      type: String,
      default: "left",
      valid: value => {
        return ["left", "right"].indexOf(value) > -1;
      }
    }
  },
  destroyed() {
    this.clearIntervalFn();
  },
  data() {
    return {
      indexActive: "",
      childrenLength: 0,
      interval: null
    };
  },
  methods: {
    uploadIndex(index) {
      this.indexActive = index;
      this.clearIntervalFn();
      this.palyAutomatically();
    },
    // 自动播放
    palyAutomatically() {
      if (this.interval) {
        return;
      }
      if (this.autoPlay) {
        if (this.direction === "left") {
          this.addIndexChange();
        } else {
          this.minusIndexChange();
        }
      }
    },
    addIndexChange() {
      this.interval = setInterval(() => {
        if (this.indexActive >= this.$children.length - 1) {
          this.indexActive = -1;
        }
        this.indexActive++;
        this.$emit("change", this.indexActive);
      }, 2000);
    },
    minusIndexChange() {
      this.interval = setInterval(() => {
        if (this.indexActive <= 0) {
          this.indexActive = this.$children.length;
        }
        this.indexActive--;
        this.$emit("change", this.indexActive);
      }, 2000);
    },
    clearIntervalFn() {
      clearInterval(this.interval);
      this.interval = null;
    },
    // 鼠标进入停止动画
    onMouseenter() {
      this.clearIntervalFn();
    },
    // 鼠标离开开启动画
    onMouseleave() {
      this.palyAutomatically();
    }
  }
};
</script>
<style lang="scss" scoped>
.g-carousel {
  position: relative;

  &-window {
    min-height: 150px;
    overflow: hidden;
    display: flex;
    position: relative;
  }

  .g-carousel__indicator {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-left: 8px;
      border: 1px solid #eff2f6;
      caret-color: transparent;
      background-color: transparent;

      &:hover {
        background-color: #fff;
      }

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
