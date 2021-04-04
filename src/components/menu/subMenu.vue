<!-- 页面 -->
<template>
  <div class="g-sub-menu">
    <span @click="openPopover">
      <slot name="title">{{ title }}</slot>
    </span>
    <div class="g-sub-menu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "subMenu",
  props: {
    title: {
      type: String
    }
  },
  mounted() {},
  data() {
    return {
      open: false
    };
  },
  methods: {
    openPopover() {
      this.open = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sub-menu {
  padding: 10px 20px;
  position: relative;
  & > span {
    display: inline-block;
    vertical-align: top;
  }
  .g-sub-menu-popover {
    position: absolute;
    top: 100%;
    left: 100%;
    border: 1px solid red;
    white-space: nowrap;
    & .g-sub-menu .g-sub-menu-popover {
      top: 0;
      margin-left: 4px;
    }
  }
}
</style>
