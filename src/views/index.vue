<!-- 页面 -->
<template>
  <div>
    <g-button @click="handleOpenMessage2" type="success">默认按钮</g-button>
    <g-button @click="handleOpenMessage3" type="info">默认按钮</g-button>
    <g-button @click="handleOpenMessage4" type="warning">默认按钮</g-button>
    <g-button @click="handleOpenMessage5" type="danger">默认按钮</g-button>
    <g-button-group>
      <g-button icon="left">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
    </g-button-group>
    <g-button type="primary" icon="thumbs-up"></g-button>
    <g-button size="medium">按钮</g-button>
    <g-button size="small">按钮</g-button>
    <g-button size="mini">按钮</g-button>
    <g-button size="mini" disabled>按钮</g-button>
    <hr />
    <g-input v-model="input" placeholder="请输入内容"></g-input>
    <g-input disabled placeholder="请输入内容"></g-input>
    <g-input v-model="input" placeholder="请输入内容" clearable></g-input>
    <hr />
    <div>
      <g-popover position="bottom">
        <template slot="content"
          >这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template
        >
        <g-button>bottom</g-button>
      </g-popover>
      <g-popover
        position="top"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <g-button>top</g-button>
      </g-popover>
      <g-popover
        position="left"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <g-button>left</g-button>
      </g-popover>
      <g-popover position="right" title="标题">
        <template slot="content">
          单纯的文字
        </template>
        <g-button>right</g-button>
      </g-popover>
    </div>
    <hr />
    <g-collapse :selected="[1, 2]">
      <g-collapse-item name="1" title="第一个">
        <div>
          <p>我是第一个</p>
        </div>
      </g-collapse-item>
      <g-collapse-item name="2" title="第二个">
        <div>
          <p>我是第二个</p>
        </div>
      </g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      input: "lalal"
    };
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
<style lang="scss" scoped></style>
