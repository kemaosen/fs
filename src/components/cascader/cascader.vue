<!-- 级联选择器页面 -->
<template>
  <div class="g-cascader">
    <div class="g-trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="g-popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>
<script>
import cascaderItems from "./cascaderItems";

export default {
  name: "cascader",
  components: { cascaderItems },
  props: {
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.g-cascader {
  .g-trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }

  .g-popover {
    border: 1px solid red;
    height: 200px;
    overflow: hidden;
  }
}
</style>
