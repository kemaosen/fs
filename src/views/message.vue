<!-- 页面 -->
<template>
  <div class="app-container">
    <g-button @click="handleOpenMessage2" type="success">默认按钮</g-button>
    <g-button @click="handleOpenMessage3" type="info">默认按钮</g-button>
    <g-button @click="handleOpenMessage4" type="warning">默认按钮</g-button>
    <g-button @click="handleOpenMessage5" type="danger">默认按钮</g-button>

    <hr />

    <hr />
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    handleOpenMessage1() {
      this.$message("展示下", { duration: 0 });
    },
    handleOpenMessage2() {
      this.$message("展示下", {
        duration: 0,
        type: "success",
        showClose: true
      });
    },
    handleOpenMessage3() {
      this.$message("展示下", { type: "info", position: "top" });
    },
    handleOpenMessage4() {
      this.$message("展示下", {
        type: "warning",
        position: "bottom"
      });
    },
    handleOpenMessage5() {
      this.$message("展示下", {
        type: "error",
        position: "middle"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
}
</style>
