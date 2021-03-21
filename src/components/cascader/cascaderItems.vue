<!-- 级联选择器递归组件页面 -->
<template>
  <div class="cascader-item">
    <div class="left">
      <div
        v-for="item in items"
        :key="item.name"
        @click="handleSelectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <GCascaderItem :items="rightItems"></GCascaderItem>
    </div>
  </div>
</template>
<script>
export default {
  name: "GCascaderItem",
  props: {
    items: {
      type: Array
    }
  },
  mounted() {},
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  },
  methods: {
    handleSelectItem(item) {
      this.leftSelected = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.cascader-item {
  border: 1px solid #ddd;
  display: flex;
  .right {
    margin-top: -1px;
  }
}
</style>
