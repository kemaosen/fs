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
        { params: 'type', intro: '类型', type: 'String', options: 'text，textarea 和其他 原生 input 的 type 值', default: 'text' },
        { params: 'value/v-model', intro: '绑定值', type: 'string/number', options: '', default: '' },
        { params: 'placeholder', intro: '输入框占位文本', type: 'String', options: '', default: '' },
        { params: 'error', intro: '错误信息', type: 'String', options: '', default: '' },
        { params: 'disabled', intro: '是否禁用', type: 'Boolean', options: '', default: 'false' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
