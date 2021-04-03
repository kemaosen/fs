<!-- 页面 -->
<template>
  <div class="app-container">
    <g-carousel :initial-index="index" style="border:1px solid red">
      <g-carousel-item>
        <div class="box">1</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box">2</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box">3</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box">4</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box">5</div>
      </g-carousel-item>
    </g-carousel>
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      index: 0,
      selected: []
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
}

.box {
  height: 150px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
