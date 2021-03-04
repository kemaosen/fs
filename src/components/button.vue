<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true, [`g-button-${type}`]: true }"
    @click="$emit('click')"
  >
    <!--<button class="g-button" :class="{undefined:true}">-->
    <!--<button class="g-button" :class="{left:true}">-->
    <!--<button class="g-button" :class="{right:true}">-->
    <!--<svg v-if="icon" class="icon" >-->
    <!--<use :xlink:href="`#i-${icon}`"></use>-->
    <!--</svg>-->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <!-- slot 不能添加class 变通给他添加一个父级元素 父级添加class来影响他-->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";

export default {
  name: "DistanceButton",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {},
    type: {
      type: String,
      default: "default"
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left", // 设置默认的值
      validator(value) {
        // 验证用户传过来的值 是不是符合规范的 不是就报错 return=false
        //  方式三
        // return value === 'left' ||  value === 'right';
        //  方式二
        // return !(value !== 'left' && value !== 'right');
        //  方式一
        if (value !== "left" && value !== "right") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "var";

@keyframes spin {
  0% {
    trasdform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: $font-size;
  height: $button-height;
  line-height: 1;
  padding: 12px 20px;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  display: inline-block;
  text-align: center;
  /*解决按钮多个不对齐 设置基线对齐*/
  vertical-align: middle;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: pointer;
  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  /* 将button组件设置为display:inline-flex 弹性盒子 设置左右的内容的等级显示icon在左还是在右*/
  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
.g-button-primary {
  background-color: $color-primary;
  border-color: $color-primary;
  &:hover {
    background-color: $color-primary-hover;
    border-color: $color-primary-hover;
  }
}
.g-button-success {
  background-color: $color-success;
  border-color: $color-success;
  &:hover {
    background-color: $color-success-hover;
    border-color: $color-success-hover;
  }
}
.g-button-info {
  background-color: $color-info;
  border-color: $color-info;
  &:hover {
    background-color: $color-info-hover;
    border-color: $color-info-hover;
  }
}
.g-button-danger {
  background-color: $color-danger;
  border-color: $color-danger;
  &:hover {
    background-color: $color-danger-hover;
    border-color: $color-danger-hover;
  }
}
.g-button-warning {
  background-color: $color-warning;
  border-color: $color-warning;
  &:hover {
    background-color: $color-warning-hover;
    border-color: $color-warning-hover;
  }
}
.g-button-default {
  background-color: $button-default-color;
  border-color: $border-color;
  &:hover {
    border-color: $button-default-border-color;
    background-color: $button-default-hover-bg;
  }
}
.g-button-primary,
.g-button-success,
.g-button-info,
.g-button-danger,
.g-button-warning {
  color: #fff;
}
.g-button + .g-button,
.g-button + .g-button-group {
  margin-left: 0.5em;
}
</style>
