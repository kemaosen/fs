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
        { params: 'gutter', intro: '栅格间隔', type: 'Number/String', options: '', default: '0' },
        { params: 'align', intro: 'flex对其方式', type: 'left/right/center', options: '', default: '' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
