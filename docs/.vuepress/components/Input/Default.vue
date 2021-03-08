<!-- 页面 -->
<template>
  <div class="container">
    <g-input placeholder="请输入内容"></g-input>
    <g-input v-model="value" placeholder="请输入内容"></g-input>
    <g-input disabled placeholder="请输入内容"></g-input>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Input from '~/src/components/input'

export default {
  name: 'Input-Default',
  components: { 'g-input': Input },
  mounted() {

  },
  data() {
    return {
      value: '你好，世界',
      html: `
        <g-input  placeholder="请输入内容"></g-input>
        <g-input v-model="value" placeholder="请输入内容"></g-input>
        <g-input  disabled placeholder="请输入内容"></g-input>
      `
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
