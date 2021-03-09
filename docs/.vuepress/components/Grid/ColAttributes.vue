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

        { params: 'span', intro: '栅格占据的列数', type: 'Number', options: '', default: '24' },
        { params: 'offset', intro: '栅格左侧的间隔格数', type: 'Number', options: '', default: 0 },
        { params: 'xs', intro: '<768px 响应式栅格数或者栅格属性对象', type: 'Object({span: 4, offset: 4})', options: '', default: '' },
        { params: 'sm', intro: '≥768px 响应式栅格数或者栅格属性对象', type: 'Object({span: 4, offset: 4})', options: '', default: '' },
        { params: 'md', intro: '≥992px 响应式栅格数或者栅格属性对象', type: 'Object({span: 4, offset: 4})', options: '', default: '' },
        { params: 'lg', intro: '≥1200px 响应式栅格数或者栅格属性对象', type: 'Object({span: 4, offset: 4})', options: '', default: '' },
        { params: 'xl', intro: '≥1920px 响应式栅格数或者栅格属性对象', type: 'Object({span: 4, offset: 4})', options: '', default: '' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
