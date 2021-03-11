<!-- 页面 -->
<template>
  <div class="g-popover" ref="popover">
    <div
      ref="contentWrapper"
      :class="[`position-${position}`]"
      class="content-wrapper"
      v-if="visible"
      :style="{ width: width + 'px' }"
    >
      <div class="content-title" v-if="title">{{ title }}</div>
      <template v-if="content">
        {{ content }}
      </template>
      <template v-else>
        <slot name="content"></slot>
      </template>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "DistancePopover",
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", () => {
        this.open();
      });
    } else {
      this.$refs.popover.addEventListener("mouseenter", () => {
        this.open();
      });
      this.$refs.popover.addEventListener("mouseleave", () => {
        this.close();
      });
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", () => {
        this.open();
      });
    } else {
      this.$refs.popover.removeEventListener("mouseenter", () => {
        this.open();
      });
      this.$refs.popover.removeEventListener("mouseleave", () => {
        this.close();
      });
    }
  },
  data() {
    return { visible: false };
  },
  props: {
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    // 显示用的文字
    content: {
      type: String
    },
    title: {
      type: String
    },
    width: {
      type: [String, Number],
      default: "150"
    }
  },
  methods: {
    positionContent() {
      // 显示弹出内容 并定位到当前点击位置
      // 获取内容区域El, 获取触发区域El
      const { contentWrapper, triggerWrapper } = this.$refs;
      // 将内容区域挂在到body上
      document.body.appendChild(contentWrapper);
      // 获取触发元素距离左上原点的 left top 的值
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();

      let { height: height2 } = contentWrapper.getBoundingClientRect();
      // 计算出每一种this.position 的 contentWrapper的位置
      // window.scrollY 页面沿Y轴滚动的距离
      // window.scrollX 页面沿X轴滚动的距离
      let positionType = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY + (height - height2) / 2
        }
      };
      contentWrapper.style.top = positionType[this.position].top + "px";
      contentWrapper.style.left = positionType[this.position].left + "px";
      document.addEventListener("click", this.onClickDocument);
    },
    onClickDocument(e) {
      // e当前点击的元素
      if (
        this.$refs.popover &&
        (this.$refs.popover.contains(e.target) ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      } // 如果文字内容中又e.target  那么 啥也不执行
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper.contains(e.target) ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      } // 如果文字内容中又e.target  那么 啥也不执行

      this.close();
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
      });
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  },
  watch: {},
  filters: {},
  computed: {},
  components: {}
};
</script>

<style scoped lang="scss">
@import "var";
.g-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color-popover;
  border-radius: $border-radius;
  padding: 18px 20px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.1));
  background-color: white;
  //max-width: 20em;
  min-width: 150px;
  word-break: break-all;
  font-size: 14px;
  color: #606266;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 7px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: $border-color-popover;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: $border-color-popover;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: $border-color-popover;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: $border-color-popover;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
  & .content-title {
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
    color: #303133;
  }
}
</style>
