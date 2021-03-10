<!-- Message -->
<template>
  <div class="warp" :class="messageClasses">
    <div class="toast" :class="themeClasses" ref="wrapper">
      <div class="message">
        <div>
          <g-icon :name="type + '-g'"></g-icon>
          <slot v-if="!enableHTML"></slot>
          <div v-else v-html="$slots.default[0]"></div>
        </div>
        <span v-if="showClose" class="close" @click="onClickClose">x</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  name: "DistanceToast",
  props: {
    duration: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    showClose: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Object,
      default: () => {
        return { text: "关闭", callback: undefined };
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    },
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["success", "warning", "info", "error"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.execAutoClose();
  },
  data() {
    return {};
  },
  methods: {
    execAutoClose() {
      // 控制是否自动关闭
      if (this.duration) {
        setTimeout(() => {
          this.close();
        }, this.duration * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  },
  components: { "g-icon": Icon },
  computed: {
    messageClasses() {
      return {
        [`position-${this.position}`]: true
      };
    },
    themeClasses() {
      return {
        [`message-${this.type}`]: true
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import "src/components/var";
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes sider-bottom {
  0% {
    opacity: 0;
    transform: translateY(100%) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}
@keyframes sider-top {
  0% {
    opacity: 0;
    transform: translateY(-100%) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}
.warp {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  .toast {
    // top: 0;
    font-size: $font-size;
    min-height: $tabs-toast-height;
    display: flex;
    align-items: center;
    background-color: $message-info-bg-color;
    border-radius: 4px;
    box-shadow: 0 0 3 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #ebeef5;
    color: $color-info;
    padding: 0 16px;
    .message {
      min-width: 380px;
      padding: 14px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
      }
      & .g-icon {
        margin-right: 0.5em;
      }
      & .close {
        padding: 0 5px;
        font-size: 16px;
        flex-shrink: 0;
        cursor: pointer;
      }
    }
    // 配置主题
    &.message-success {
      color: $color-success;
      background-color: $message-success-border-color;
      border-color: $message-success-bg-color;
      & .g-icon {
        fill: $color-success;
      }
    }
    &.message-warning {
      color: $color-warning;
      background-color: $message-warning-bg-color;
      border-color: $message-warning-border-color;
      & .g-icon {
        fill: $color-warning;
      }
    }
    &.message-error {
      color: $color-danger;
      background-color: $message-error-bg-color;
      border-color: $message-error-border-color;
      & .g-icon {
        fill: $color-danger;
      }
    }
    &.message-info {
      & .g-icon {
        fill: $color-info;
      }
    }
  }
  &.position-top {
    top: 20px;
    transform: translateX(-50%);
    animation: sider-top 0.6s;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-bottom {
    bottom: 20px;
    transform: translateX(-50%);
    animation: sider-bottom 0.6s;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in 0.6s;
  }
}
</style>
