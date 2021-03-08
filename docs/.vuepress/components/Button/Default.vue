<!-- 页面 -->
<template>
  <div class="container">
    <g-button>默认按钮</g-button>
    <g-button type="primary">默认按钮</g-button>
    <g-button type="success">默认按钮</g-button>
    <g-button type="info">默认按钮</g-button>
    <g-button type="warning">默认按钮</g-button>
    <g-button type="danger">默认按钮</g-button>
    <g-button  disabled>默认按钮</g-button>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from "~/src/components/button";

export default {
  name: "Button-Default",
  mounted() {},
  data() {
    return {
      html:`
      <g-button>默认按钮</g-button>
      <g-button type="primary">默认按钮</g-button>
      <g-button type="success">默认按钮</g-button>
      <g-button type="info">默认按钮</g-button>
      <g-button type="warning">默认按钮</g-button>
      <g-button type="danger">默认按钮</g-button>
      `
    };
  },
  methods: {},
  components: {
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped>
</style>
