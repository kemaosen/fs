<!-- 页面 -->
<template>
  <div class="g-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Gmenu",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    // 是否开启多选
    multiple: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      root: this
    };
  },
  updated() {
    this.initItemSelect();
  },
  mounted() {
    this.initItemSelect();
    this.uploadItemSelect();
  },
  data() {
    return {
      childrenItems: []
    };
  },
  methods: {
    menuAddItems(vm) {
      this.childrenItems.push(vm);
    },
    initItemSelect() {
      this.childrenItems.forEach(vm => {
        if (this.selected.includes(vm.name)) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    uploadItemSelect() {
      this.childrenItems.forEach(vm => {
        vm.$on("add:menuItemSelectd", itemName => {
          if (this.multiple) {
            this.$emit("update:selected", [...this.selected, itemName]);
          } else {
            this.$emit("update:selected", [itemName]);
          }
        });
      });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.g-menu {
  display: flex;
}
</style>
