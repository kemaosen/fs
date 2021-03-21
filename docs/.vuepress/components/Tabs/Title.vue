<!-- 页面 -->
<template>
  <div class="container">
    <g-tabs v-model="select" >
      <g-tabs-head>
        <g-tabs-item name="美女"><g-icon name="right"></g-icon>美女</g-tabs-item>
        <g-tabs-item name="财经" disabled>财经</g-tabs-item>
        <g-tabs-item name="宠物">宠物</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="美女">关于美女的</g-tabs-pane>
        <g-tabs-pane name="财经">关于财经的</g-tabs-pane>
        <g-tabs-pane name="宠物">关于宠物的</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Tabs from '~/src/components/tab/tabs'
import TabsBody from '~/src/components/tab/tabs-body'
import TabsHead from '~/src/components/tab/tabs-head'
import TabsItem from '~/src/components/tab/tabs-item'
import TabsPane from '~/src/components/tab/tabs-pane'
import Icon from '~/src/components/icon'
export default {
  name: 'Default',
  components: {
    'g-icon': Icon,
    "g-tabs":Tabs,
    "g-tabs-body":TabsBody,
    "g-tabs-head":TabsHead,
    "g-tabs-item":TabsItem,
    "g-tabs-pane":TabsPane,
  },
  mounted() {
  },
  data() {
    return {
      select:'美女',
      html: `
    <g-tabs v-model="select" >
      <g-tabs-head>
        <g-tabs-item name="美女"><g-icon name="right">美女</g-icon></g-tabs-item>
        <g-tabs-item name="财经" disabled>财经</g-tabs-item>
        <g-tabs-item name="宠物">宠物</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="美女">关于美女的</g-tabs-pane>
        <g-tabs-pane name="财经">关于财经的</g-tabs-pane>
        <g-tabs-pane name="宠物">关于宠物的</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

     data() {
      return {
        select:'美女',
      }
    }`
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
