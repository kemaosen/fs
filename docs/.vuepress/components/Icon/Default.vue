<!-- 页面 -->
<template>
  <div class="container">
    <g-icon name="settings"></g-icon>
    <g-icon name="left"></g-icon>
    <g-icon name="right"></g-icon>
    <g-icon name="error"></g-icon>
    <g-icon name="info"></g-icon>
    <g-icon name="bihe"></g-icon>
    <g-icon name="kai"></g-icon>
    <g-icon name="loading"></g-icon>
    <g-icon name="thumbs-up"></g-icon>
    <g-icon name="down"></g-icon>
    <g-icon name="dondownload"></g-icon>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Icon from '~/src/components/icon'

export default {
  name: 'Icon',
  components: {
    'g-icon': Icon
  },
  mounted() {

  },
  data() {
    return {
      html: `
        <g-icon name="settings"></g-icon>
        <g-icon name="left"></g-icon>
        <g-icon name="right"></g-icon>
        <g-icon name="error"></g-icon>
        <g-icon name="info"></g-icon>
        <g-icon name="bihe"></g-icon>
        <g-icon name="kai"></g-icon>
        <g-icon name="loading"></g-icon>
        <g-icon name="thumbs-up"></g-icon>
        <g-icon name="down"></g-icon>
        <g-icon name="dondownload"></g-icon>
      `
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.container{
  svg{
    padding: 20px;
    background-color: #efefef;
    font-size: 20px;
  }
}
</style>
