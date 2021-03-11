<!-- 页面 -->
<template>
  <div class="container">
    <g-popover width="120">
      <template slot="content">
        <p>这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <g-button size="mini" >取消</g-button>
          <g-button type="primary" size="mini">确定</g-button>
        </div>
      </template>
      <g-button>click 激活</g-button>
    </g-popover>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from '~/src/components/button'
import Popover from '~/src/components/Popover'

export default {
  name: 'Default',
  components: {
    'g-button': Button,
    'g-popover': Popover
  },
  mounted() {
    // filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.1));
  },
  data() {
    return {
      html: `
    <g-popover width="120">
      <template slot="content">
        <p>这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <g-button size="mini" >取消</g-button>
          <g-button type="primary" size="mini">确定</g-button>
        </div>
      </template>
      <g-button>click 激活</g-button>
    </g-popover>`
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
