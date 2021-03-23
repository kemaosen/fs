<!-- 级联选择器页面 -->
<template>
  <div class="g-cascader" ref="cascader">
    <div class="g-trigger" @click="open">
      <g-input
        type="text"
        v-model="result"
        :placeholder="placeholder"
      ></g-input>
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
import Input from "@/components/input";
export default {
  name: "cascader",
  components: { cascaderItems, "g-input": Input },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    source: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String
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
    },
    close() {
      this.popoverVisible = false;
      document.removeEventListener("click", this.onClickDocument);
      this.$emit("close");
    },
    open() {
      this.popoverVisible = true;
      this.$nextTick(() => {
        document.addEventListener("click", this.onClickDocument);
      });
    },
    onClickDocument(e) {
      let { cascader } = this.$refs;
      let { target } = e;
      if (cascader === target || cascader.contains(target)) return;
      this.close();
    }
  },
  computed: {
    result() {
      return this.value
        .map(item => {
          return item.name;
        })
        .join("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.g-cascader {
  position: relative;
  display: inline-block;
  .g-trigger {
    height: 32px;
    width: 222px;
    & > .warpper {
      width: 100%;
      & /deep/ input {
        width: 100%;
      }
    }
  }

  .g-popover {
    box-sizing: border-box;
    position: absolute;
    height: 200px;
    margin-top: 4px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
