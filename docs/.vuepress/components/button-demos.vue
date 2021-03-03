<!-- 页面 -->
<template>
  <div>
    <g-button>按钮</g-button>
    <g-button icon="settings">按钮</g-button>
    <g-button loading>按钮</g-button>
    <g-button disabled>按钮</g-button>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from "../../../src/components/button";

export default {
  name: "button-demo.vue",
  mounted() {},
  data() {
    return {
      html:`
      <g-button>按钮</g-button>
      <g-button icon="settings">按钮</g-button>
      <g-button loading>按钮</g-button>
      <g-button disabled>按钮</g-button>
      `
    };
  },
  methods: {},
  components: {
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped></style>
