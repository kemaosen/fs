<!-- 页面 -->
<template>
  <div class="container">
    <g-row class="g-row">
      <g-col class="g-col" span="24"></g-col>
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
      <g-col class="g-col g-col-twoI" span="4"></g-col>
      <g-col class="g-col g-col-twoII" span="4"></g-col>
      <g-col class="g-col g-col-twoI" span="4"></g-col>
      <g-col class="g-col g-col-twoII" span="4"></g-col>
      <g-col class="g-col g-col-twoI" span="4"></g-col>
      <g-col class="g-col g-col-twoII" span="4"></g-col>
    </g-row>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import GCol from '~/src/components/col'
import GRow from '~/src/components/row'

export default {
  name: 'grid',
  components: { GCol, GRow },
  data() {
    return {
      html: `
      <g-row class="g-row">
        <g-col class="g-col" span="24"></g-col>
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
        <g-col class="g-col g-col-twoI" span="4"></g-col>
        <g-col class="g-col g-col-twoII" span="4"></g-col>
        <g-col class="g-col g-col-twoI" span="4"></g-col>
        <g-col class="g-col g-col-twoII" span="4"></g-col>
        <g-col class="g-col g-col-twoI" span="4"></g-col>
        <g-col class="g-col g-col-twoII" span="4"></g-col>
      </g-row>
      `
    }
  },
}
</script>
<style lang='scss' scoped>
.g-row{
  margin-bottom: 20px;

  &:last-child{
    margin-bottom: 0;
  }
}

.g-col{
  border-radius: 4px;
  height: 40px;
  background-color: #99a9bf;
}

.g-col-twoI{
  background-color: #d3dce6;
}

.g-col-twoII{
  background-color: #e5e9f2;
}
</style>
