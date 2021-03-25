<!-- 页面 -->
<template>
  <div class="app-container">
    <p>{{ selected }}</p>
    <g-cascader
      :source="source"
      :value.sync="selected"
      @change="handlechange"
      placeholder="请选择"
    ></g-cascader>
    <p>11111111111111111111</p>
    <hr />
    <g-carousel :initial-index="index">
      <g-carousel-item>
        <div class="box">1</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box">2</div>
      </g-carousel-item>
    </g-carousel>
  </div>
</template>
<script>
export default {
  name: "index",
  mounted() {
    setInterval(() => {
      if (this.index >= 1) {
        this.index = -1;
      }
      this.index += 1;
      console.log(this.index);
    }, 3000);
  },
  data() {
    return {
      index: 0,
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            { name: "杭州", children: [{ name: "上城" }, { name: "下城" }] },
            { name: "嘉兴" },
            { name: "湖州" }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [{ name: "庐阳区" }, { name: "蜀山区" }]
            },
            { name: "六安" },
            { name: "芜湖" }
          ]
        }
      ]
    };
  },
  methods: {
    handlechange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
}
.box {
  width: 200px;
  height: 150px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
