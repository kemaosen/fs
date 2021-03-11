<!-- 页面 -->
<template>
  <table>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    <tr v-for="(item) in attrs" :key="item.params">
      <td>{{ item.params }}</td>
      <td>{{ item.intro }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.options }}</td>
      <td>{{ item.default }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'Attributes',
  data() {
    return {
      attrs: [
        { params: 'message', intro: '消息文字', type: 'String', options: '', default: '' },
        { params: 'type', intro: '主题', type: 'string/number', options: 'success/warning/info/error', default: 'info' },
        { params: 'enableHTML', intro: '是否将 message 属性作为 HTML 片段处理', type: 'Boolean', options: '', default: 'false' },
        { params: 'duration', intro: '显示时间, 毫秒。设为0则不会自动关闭', type: 'Number', options: '', default: '3000' },
        { params: 'showClose', intro: '是否显示关闭按钮', type: 'Boolean', options: '', default: 'false' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
