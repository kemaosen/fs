<!-- 手风琴页面 -->
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "DistanceCollapse",
  props: {
    accordion: {
      // 是否可以自动收缩
      type: Boolean,
      default: false
    },
    value: {
      type: Array
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    // 页面加载通知子组件 显示那个
    this.eventBus.$emit("update:value", this.value);
    // 在父组件使用变量控制的时候 需要实时对接数据  父组件与当前组件(本页面) 值同步
    // 深拷贝
    let selectCopy = JSON.parse(JSON.stringify(this.value));
    this.eventBus.$on("update:addSelected", name => {
      if (this.accordion) {
        selectCopy = [name];
      } else {
        selectCopy.push(name);
      }
      this.eventBus.$emit("update:value", selectCopy);
      this.$emit("update:value", selectCopy);
      this.$emit("change", this.accordion ? selectCopy : name);
    });

    this.eventBus.$on("update:removeSelected", name => {
      let index = selectCopy.indexOf(name);
      selectCopy.splice(index, 1);
      this.eventBus.$emit("update:value", selectCopy);
      this.$emit("update:value", selectCopy);
      this.$emit("change", this.accordion ? selectCopy : name);
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
@import "src/components/var";
.collapse {
  border: 1px solid $border-color-ddd;
  border-radius: $border-radius;
}
</style>
