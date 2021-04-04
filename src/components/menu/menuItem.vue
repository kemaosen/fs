<!-- 页面 -->
<template>
  <div
    @click="onChangeItem"
    :class="{ 'g-menu-item': true, 'g-selected': selected }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-menu-item",
  props: {
    name: {
      type: [Number, String],
      required: true
    }
  },
  inject: ["root"],
  created() {
    this.root.menuAddItems(this);
  },
  mounted() {},
  data() {
    return {
      selected: false
    };
  },

  methods: {
    onChangeItem() {
      this.$emit("add:menuItemSelectd", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-menu-item {
  padding: 10px 20px;
}
.g-selected {
  background-color: red;
}
</style>
