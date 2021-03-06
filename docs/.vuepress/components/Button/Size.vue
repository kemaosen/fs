<!-- 页面 -->
<template>
  <div class="container">
    <g-button>按钮</g-button>
    <g-button size="medium">按钮</g-button>
    <g-button size="small">按钮</g-button>
    <g-button size="mini">按钮</g-button>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from '~/src/components/button'

export default {
  name: 'Size',
  mounted() {

  },
  components: {
    'g-button': Button,
  },
  data() {
    return {
      html: `
      <g-button>按钮</g-button>
      <g-button size="medium">按钮</g-button>
      <g-button size="small">按钮</g-button>
      <g-button size="mini">按钮</g-button>
      `
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
