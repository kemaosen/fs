<!-- 页面 -->
<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings" type="primary">默认按钮</g-button>

    <g-button type="primary">默认按钮</g-button>
    <g-button type="success">默认按钮</g-button>
    <g-button type="info">默认按钮</g-button>
    <g-button type="warning">默认按钮</g-button>
    <g-button type="danger">默认按钮</g-button>
    <g-button-group>
      <g-button icon="left">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
    </g-button-group>
    <g-button type="primary" icon="thumbs-up"></g-button>
    <g-button size="medium">按钮</g-button>
    <g-button size="small">按钮</g-button>
    <g-button size="mini">按钮</g-button>
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
