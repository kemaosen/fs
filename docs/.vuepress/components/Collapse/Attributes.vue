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
        { params: 'selected', intro: '当前激活的面板', type: 'Array', options: '', default: '' },
        { params: 'accordion', intro: '是否手风琴模式', type: 'Boolean', options: '', default: 'false' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
