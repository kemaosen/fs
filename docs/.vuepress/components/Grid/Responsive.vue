<!-- 页面 -->
<template>
  <div class="container">
    <g-row class="g-row">
      <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
      <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
      <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
      <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
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
  name: 'Responsive',
  components: { GCol, GRow },
  data() {
    return {
      html: `
      <g-row class="g-row">
        <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
        <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
        <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
        <g-col :xs="{span:1,offset:5}" :sm="{span:2,offset:4}" :md="{span:6,offset:0}" :lg="{span:5,offset:1}" :xl="{span:4,offset:2}" class="g-col g-col-twoI" span="6"></g-col>
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
