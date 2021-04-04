<!-- 页面 -->
<template>
  <div>
    {{ this.selected }}
    <!--    <g-menu :selected.sync="selected" multiple>-->
    <!--      <g-menu-item name="home">主页</g-menu-item>-->
    <!--      <g-menu-item name="about">关于</g-menu-item>-->
    <!--      <g-menu-item name="play">运动</g-menu-item>-->
    <!--      <g-sub-menu></g-sub-menu>-->
    <!--    </g-menu>-->

    <g-menu :selected.sync="selected">
      <g-menu-item name="home">主页</g-menu-item>
      <g-sub-menu>
        <template slot="title">关于</template>
        <g-menu-item name="about1">关于1</g-menu-item>
        <g-menu-item name="about2">关于2</g-menu-item>
        <g-sub-menu>
          <template slot="title">关于3</template>
          <g-menu-item name="qq">QQ</g-menu-item>
          <g-menu-item name="微信">微信</g-menu-item>
          <g-sub-menu>
            <template slot="title">电话</template>
            <g-menu-item name="移动">移动</g-menu-item>
            <g-menu-item name="联通">联通</g-menu-item>
            <g-menu-item name="电信">电信</g-menu-item>
          </g-sub-menu>
        </g-sub-menu>
      </g-sub-menu>
      <g-menu-item name="play">运动</g-menu-item>
    </g-menu>
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      selected: ["about1"]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
