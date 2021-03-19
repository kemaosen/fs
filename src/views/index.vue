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
          >这是一段内容,这是一段内容,这是一段内容,这是一段内容。
        </template>
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
    <g-collapse :selected="[]" accordion @change="handleChangeCollapse">
      <g-collapse-item name="1" title="一致性 Consistency">
        <p>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </p>
        <p>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </p>
      </g-collapse-item>
      <g-collapse-item name="2" title="反馈 Feedback">
        <p>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</p>
        <p>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
      </g-collapse-item>
      <g-collapse-item name="3" title="效率 Efficiency">
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </p>
      </g-collapse-item>
      <g-collapse-item name="4" title="可控 Controllability">
        <p>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </p>
        <p>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </p>
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
    },
    handleChangeCollapse(e) {
      console.log(e);
      console.log("触发了");
    }
  }
};
</script>
<style lang="scss" scoped></style>
