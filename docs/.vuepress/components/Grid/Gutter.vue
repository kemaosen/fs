<!-- 页面 -->
<template>
  <div class="container">
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
        <div class="g-col-twoII" ></div>
      </g-col>
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
  name: 'gutter',
  components: { GCol, GRow },
  data() {
    return {
      html: `
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
          <div class="g-col-twoII" ></div>
        </g-col>
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
}

.g-col-twoI{
  background-color: #d3dce6;
  height: 40px;
  border-radius: 4px;
}

.g-col-twoII{
  background-color: #e5e9f2;
  height: 40px;
  border-radius: 4px;
}
</style>
