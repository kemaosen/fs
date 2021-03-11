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
        { params: 'trigger', intro: '触发方式', type: 'String', options: 'click/hover', default: 'click' },
        { params: 'title', intro: '标题', type: 'String', options: '', default: '' },
        { params: 'content', intro: '显示内容,也可以通过 slot 传入 DOM', type: 'String', options: '', default: '' },
        { params: 'width', intro: '宽度', type: 'Number/String', options: '', default: '' },
        { params: 'position', intro: '出现位置', type: 'String', options: 'top/bottom/left/right', default: 'top' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
