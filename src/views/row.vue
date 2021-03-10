<!-- 页面 -->
<template>
  <div>
    <g-row class="g-row">
      <g-col class="g-col" span="24" style="background-color: #99a9bf;"></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col class="g-col g-col-twoI" span="12"></g-col>
      <g-col class="g-col g-col-twoII" span="12"></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col class="g-col g-col-twoI" span="8"></g-col>
      <g-col class="g-col g-col-twoII" span="8"></g-col>
      <g-col class="g-col g-col-twoI" span="8"></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col class="g-col g-col-twoI" span="6"></g-col>
      <g-col class="g-col g-col-twoII" span="6"></g-col>
      <g-col class="g-col g-col-twoI" span="6"></g-col>
      <g-col class="g-col g-col-twoII" span="6"></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col class="g-col g-col-twoI" span="4">1</g-col>
      <g-col class="g-col g-col-twoII" span="4">2</g-col>
      <g-col class="g-col g-col-twoI" span="4">3</g-col>
      <g-col class="g-col g-col-twoII" span="4">4</g-col>
      <g-col class="g-col g-col-twoI" span="4">5</g-col>
      <g-col class="g-col g-col-twoII" span="4">6</g-col>
    </g-row>
    <g-row class="g-row" :gutter="20">
      <g-col class="g-col" span="6">
        <div class="g-col-twoI"></div>
      </g-col>
      <g-col class="g-col" span="6">
        <div class="g-col-twoII"></div>
      </g-col>
      <g-col class="g-col" span="6">
        <div class="g-col-twoI"></div>
      </g-col>
      <g-col class="g-col" span="6">
        <div class="g-col-twoII"></div>
      </g-col>
    </g-row>
    <hr />
    <g-row class="g-row" align="left">
      <g-col
        :xs="{ span: 1, offset: 5 }"
        :sm="{ span: 2, offset: 4 }"
        :md="{ span: 6, offset: 0 }"
        :lg="{ span: 5, offset: 1 }"
        :xl="{ span: 4, offset: 2 }"
        class="g-col g-col-twoI"
        span="6"
      ></g-col>
      <g-col
        :xs="{ span: 1, offset: 5 }"
        :sm="{ span: 2, offset: 4 }"
        :md="{ span: 6, offset: 0 }"
        :lg="{ span: 5, offset: 1 }"
        :xl="{ span: 4, offset: 2 }"
        class="g-col g-col-twoI"
        span="6"
      ></g-col>
      <g-col
        :xs="{ span: 1, offset: 5 }"
        :sm="{ span: 2, offset: 4 }"
        :md="{ span: 6, offset: 0 }"
        :lg="{ span: 5, offset: 1 }"
        :xl="{ span: 4, offset: 2 }"
        class="g-col g-col-twoI"
        span="6"
      ></g-col>
    </g-row>
  </div>
</template>
<script>
export default {
  name: "row",
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.g-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.g-col {
  border-radius: 4px;
  height: 40px;
}

.g-col-twoI {
  background-color: #d3dce6;
  height: 40px;
  border-radius: 4px;
}

.g-col-twoII {
  background-color: #e5e9f2;
  height: 40px;
  border-radius: 4px;
}
</style>
