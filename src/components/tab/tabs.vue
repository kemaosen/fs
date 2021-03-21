<!-- 页面 -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "DistanceTabs",
  props: {
    value: {
      type: [String],
      required: true
    }
    // direction: {
    //   type: String,
    //   default: "horizontal",
    //   validator(value) {
    //     return ["horizontal", "vertical"].indexOf(value) >= 0;
    //   }
    // }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {},
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.wran &&
        console.wran(
          "tabs的子组件因该是tabs-head或tabs-body 但是你没有写子组件"
        );
    }
    // 页面一加载 获取当前被选中的元素 并高亮他  用于动画
    this.$children.forEach(vm => {
      if (vm.$options.name === "DistanceTabsHead") {
        vm.$children.forEach(childVm => {
          if (
            childVm.$options.name === "DistanceTabItem" &&
            childVm.name === this.value
          ) {
            this.eventBus.$emit("update:value", this.value, childVm);
          }
        });
      }
    });
    this.eventBus.$on("update:value", (name, childVm) => {
      this.$emit("change", childVm);
    });
  },
  data() {
    return {
      eventBus: new Vue()
    };
  }
};
</script>

<style scoped lang="scss">
.tabs {
}
</style>
