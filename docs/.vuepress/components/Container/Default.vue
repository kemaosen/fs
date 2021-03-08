<!-- 页面 -->
<template>
  <div class="container">
    <g-container class="g-container" >
      <g-header class="g-header">Header</g-header>
      <g-main class="g-main">Main</g-main>
    </g-container>

    <g-container class="g-container" >
      <g-header class="g-header">Header</g-header>
      <g-main class="g-main">Main</g-main>
      <g-footer class="g-footer">Footer</g-footer>
    </g-container>

    <g-container class="g-container">
      <g-aside class="g-aside" width="200px">Aside</g-aside>
      <g-main class="g-main">Main</g-main>
    </g-container>

    <g-container class="g-container">
      <g-header class="g-header">Header</g-header>
      <g-container >
        <g-aside class="g-aside" width="200px">Aside</g-aside>
        <g-main class="g-main">Main</g-main>
      </g-container>
    </g-container>

    <g-container class="g-container">
      <g-header class="g-header">Header</g-header>
      <g-container >
        <g-aside class="g-aside" width="200px">Aside</g-aside>
        <g-container>
          <g-main class="g-main">Main</g-main>
          <g-footer class="g-footer">Footer</g-footer>
        </g-container>
      </g-container>
    </g-container>

    <g-container class="g-container">
      <g-aside class="g-aside" width="200px">Aside</g-aside>
      <g-container >
        <g-header class="g-header">Header</g-header>
        <g-main class="g-main">Main</g-main>
      </g-container>
    </g-container>

    <g-container class="g-container">
      <g-aside class="g-aside" width="200px">Aside</g-aside>
      <g-container>
        <g-header class="g-header">Header</g-header>
        <g-main class="g-main">Main</g-main>
        <g-footer class="g-footer">Footer</g-footer>
      </g-container>
    </g-container>
  </div>
</template>
<script>
import GContainer from '~/src/components/container/container'
import GHeader from '~/src/components/container/header'
import GFooter from '~/src/components/container/footer'
import GMain from '~/src/components/container/main'
import GAside from '~/src/components/container/aside'

export default {
  name: 'containerDefault',
  components: { GContainer, GHeader, GFooter, GMain, GAside, },
  mounted() {

  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.g-header, .g-footer{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.g-aside{
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.g-main{
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}


.g-container:nth-child(5) .g-aside,
.g-container:nth-child(6) .g-aside{
  line-height: 260px;
}

.g-container:nth-child(7) .g-aside{
  line-height: 320px;
}
.g-container{
  border: 1px solid #333;
  margin-bottom: 40px;
  padding:0;
  &>.g-container{margin-bottom:0}
  .container{padding:0}
}
</style>
