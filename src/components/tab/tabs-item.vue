<!-- 页面 -->
<template>
  <div
    class="tabs-item"
    @click="handleChangTabs"
    :class="classes"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DistanceTabItem",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:value", name => {
        // 选中的展示出来
        this.active = name === this.name;
      });
    }
  },
  mounted() {},
  data() {
    return {
      active: false
    };
  },
  methods: {
    handleChangTabs() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:value", this.name, this);
      }
      this.$emit("click", this);
    }
  },
  watch: {},
  filters: {},
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled };
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "../_var";

.tabs-item {
  flex-shrink: 0;
  padding: 0 1.5em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: $color-primary;
    & > svg {
      fill: $color-primary;
    }
  }

  &.disabled {
    color: $color-disabled;
    cursor: not-allowed;
  }
}
</style>
