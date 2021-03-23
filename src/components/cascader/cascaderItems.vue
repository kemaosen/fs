<!-- 级联选择器递归组件页面 -->
<template>
  <div class="cascader-item">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="handleLeftSelectItem(item)"
      >
        {{ item.name }}
        <g-icon v-if="item.children" name="right"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <GCascaderItem
        :items="rightItems"
        :level="level + 1"
        :value="value"
        @change="handleRightSelectItem"
      ></GCascaderItem>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/icon";
export default {
  name: "GCascaderItem",
  components: {
    "g-icon": Icon
  },
  props: {
    // 当前选中的数据{name：‘’，children:[]}
    value: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array
    },
    level: {
      type: Number,
      default: 0
    }
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {
    rightItems() {
      let item = this.value[this.level];
      if (item && item.children) {
        return item.children;
      } else {
        return null;
      }
    }
  },
  methods: {
    handleLeftSelectItem(item) {
      let copyItem = JSON.parse(JSON.stringify(this.value)); //[...];
      copyItem[this.level] = item; // 这里的value 就是一个数组 往数组里面添加数据，如果有就修改数据
      copyItem.splice(this.level + 1);
      this.$emit("change", copyItem);
    },
    handleRightSelectItem(newValue) {
      this.$emit("change", newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../var";
.cascader-item {
  background-color: #fff;
  display: flex;
  height: 100%;
  .right {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    border-left: 1px solid #e4e7ed;
  }
  .left {
    height: 100%;
    min-width: 180px;
    overflow: auto;
    > .label {
      padding: 0 30px 0 20px;
      height: 34px;
      line-height: 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      svg {
        fill: #999;
      }
      &:hover {
        color: $color-primary;
        svg {
          fill: $color-primary;
        }
      }
    }
  }
}
</style>
