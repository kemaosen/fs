<!-- 页面 -->
<template>
  <div class="row" :style="rowStyle" :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceRow",
  props: {
    // col 间距
    gutter: {
      type: [Number, String]
    },
    // 对其方式
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowClasses() {
      let { align } = this;
      return [align && `align-${align}`];
    },
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>
