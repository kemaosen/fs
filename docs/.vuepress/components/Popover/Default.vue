<!-- 页面 -->
<template>
  <div class="container">
    <g-popover title="标题" width="200" position="top" trigger="click"
               content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>click 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="bottom" trigger="hover"
               content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="left" trigger="click"
               content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="right" trigger="hover"
               content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
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
    <g-popover title="标题" width="200" position="top" trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>click 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="bottom" trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="left" trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
    </g-popover>

    <g-popover title="标题" width="200" position="right" trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <g-button>hover 激活</g-button>
    </g-popover>`
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
