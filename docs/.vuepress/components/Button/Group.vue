<!-- 页面 -->
<template>
  <div class="container">
    <g-button-group>
      <g-button icon="left">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
    </g-button-group>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from "~/src/components/button";
import ButtonGroup from "~/src/components/button-group";

export default {
  name: "button-group",
  mounted() {},
  data() {
    return {
      html:`
      <g-button-group>
        <g-button icon="left">按钮</g-button>
        <g-button icon="right" icon-position="right">按钮</g-button>
      </g-button-group>
      `
    };
  },
  methods: {},
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup,
  }
};
</script>
<style lang="scss" scoped>
.container{
  padding: 20px 0;
}
</style>
