<!-- 页面 -->
<template>
  <div class="container">
    <g-button icon="settings">按钮</g-button>
    <g-button icon="left">按钮</g-button>
    <g-button icon="right" icon-position="right">按钮</g-button>
    <g-button icon="thumbs-up"></g-button>
    <g-button type="primary" icon="thumbs-up"></g-button>
    <g-button loading>loading</g-button>
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
  name: "button-icon",
  mounted() {},
  data() {
    return {
      html:`
      <g-button icon="settings">按钮</g-button>
      <g-button icon="left">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
      <g-button icon="thumbs-up"></g-button>
      <g-button type="primary" icon="thumbs-up"></g-button>
      <g-button loading>loading</g-button>
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
.container{
  padding: 20px 0;
}
</style>
