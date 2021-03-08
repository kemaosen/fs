<template>
  <button
    class="g-button"
    :class="{
      [`icon-${iconPosition}`]: true,
      [`g-button-${type}`]: true,
      [`g-button-size-${size}`]: true,
      'g-button-disabled': disabled,
    }"
    @click="!disabled && $emit('click')"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <!-- slot 不能添加class 变通给他添加一个父级元素 父级添加class来影响他-->
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: 'G-Button',
  components: {
    'g-icon': Icon
  },
  mounted() {
  },
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left', // 设置默认的值
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        console.log(value)
        return ['default', 'medium', 'small', 'mini'].indexOf(value) >= 0
      }
    },
    disabled: {
      type: Boolean,
      default:false
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "var";

@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.g-button-group + .g-button{
  margin-left: 0.5em;
}

.g-button{
  font-size: $font-size;
  //height: $button-height;
  line-height: 1;
  padding: 12px 20px;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  display: inline-flex;
  text-align: center;
  /*解决按钮多个不对齐 设置基线对齐*/
  vertical-align: middle;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: pointer;

  &:focus{
    outline: none;
  }

  > .icon{
    order: 1;
    margin-right: 0.3em;
    vertical-align: middle;
  }

  > .content{
    vertical-align: middle;
    display: inline;
    order: 2;
  }

  /* 将button组件设置为display:inline-flex 弹性盒子 设置左右的内容的等级显示icon在左还是在右*/
  &.icon-right{
    > .content{
      order: 1;
    }

    > .icon{
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }

  .loading{
    animation: spin 2s infinite linear;
  }
}

.g-button-primary{
  background-color: $color-primary;
  border-color: $color-primary;

  &:hover{
    background-color: $color-primary-hover;
    border-color: $color-primary-hover;
  }
}

.g-button-success{
  background-color: $color-success;
  border-color: $color-success;

  &:hover{
    background-color: $color-success-hover;
    border-color: $color-success-hover;
  }
}

.g-button-info{
  background-color: $color-info;
  border-color: $color-info;

  &:hover{
    background-color: $color-info-hover;
    border-color: $color-info-hover;
  }
}

.g-button-danger{
  background-color: $color-danger;
  border-color: $color-danger;

  &:hover{
    background-color: $color-danger-hover;
    border-color: $color-danger-hover;
  }
}

.g-button-warning{
  background-color: $color-warning;
  border-color: $color-warning;

  &:hover{
    background-color: $color-warning-hover;
    border-color: $color-warning-hover;
  }
}

.g-button-default{
  background-color: $button-default-color;
  border-color: $border-color;

  &:hover{
    border-color: $button-default-border-color;
    background-color: $button-default-hover-bg;

    svg{
      fill: $button-default-border-color-hover;
    }
  }

  &:active{
    background-color: $button-default-action-bg;
    border-color: $button-default-border-color-hover;
    color: $button-default-border-color-hover;

    svg{
      fill: $button-default-border-color-hover;
    }
  }

  &:focus{
    background-color: $button-default-action-bg;
    border-color: $button-default-border-color-hover;
    color: $button-default-border-color-hover;

    svg{
      fill: $button-default-border-color-hover;
    }
  }
}

.g-button-primary,
.g-button-success,
.g-button-info,
.g-button-danger,
.g-button-warning{
  color: #fff;

  svg{
    fill: #fff;
  }
}

// 设置按钮大小
.g-button-size-default{
  padding: 12px 20px;
}

.g-button-size-medium{
  padding: 10px 20px;
}

.g-button-size-small{
  padding: 9px 15px;
  font-size: 12px;
}

.g-button-size-mini{
  padding: 7px 15px;
  border-radius: 3px;
  font-size: 12px;
}

.g-button-disabled,.g-button-disabled:hover,.g-button-disabled:active,.g-button-disabled:focus{
  cursor: not-allowed;
  color:$button-disabled-color;
  border-color:$button-disabled-border-color;
  background-color:#fff
}

.g-button + .g-button{
  margin-left: 0.5em;
}
</style>
