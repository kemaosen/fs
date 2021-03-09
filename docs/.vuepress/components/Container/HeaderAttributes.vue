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
        { params: 'type', intro: '类型', type: 'String', options: 'default / primary / success / warning / danger / info', default: 'default' },
        { params: 'loading', intro: '是否加载中状态', type: 'Boolean', options: '', default: 'false' },
        { params: 'icon', intro: 'icon图标名称', type: 'String', options: '', default: '' },
        { params: 'icon-position', intro: 'icon图标位置', type: 'String', options: 'left/right', default: 'left' },
        { params: 'disabled', intro: '是否禁用', type: 'Boolean', options: '', default: 'false' },
        { params: 'size', intro: '设置按钮大小', type: 'String', options: 'default/medium/small/mini', default: 'default' },
      ]
    }
  },
}
</script>
<style lang='scss' scoped></style>
