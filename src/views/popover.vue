<!-- 页面 -->
<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: "popover",
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
