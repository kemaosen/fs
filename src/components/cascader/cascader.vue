<!-- 级联选择器页面 -->
<template>
  <div class="g-cascader">
    <div class="g-trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="g-popover" v-if="popoverVisible">
      <cascader-items
        :items="source"
        :value="value"
        @change="handleChangeItem"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import cascaderItems from "./cascaderItems";

export default {
  name: "cascader",
  components: { cascaderItems },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    source: {
      type: Array,
      required: true
    }
  },
  mounted() {},
  data() {
    return {
      popoverVisible: false
    };
  },
  methods: {
    handleChangeItem(item) {
      this.$emit("update:value", item);
      this.$emit("change", item);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-cascader {
  position: relative;
  .g-trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }

  .g-popover {
    box-sizing: border-box;
    position: absolute;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
