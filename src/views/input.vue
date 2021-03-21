<!-- 页面 -->
<template>
  <div>
    <g-input v-model="input" placeholder="请输入内容"></g-input>
    <g-input disabled placeholder="请输入内容"></g-input>
    <g-input v-model="input" placeholder="请输入内容" clearable></g-input>
  </div>
</template>
<script>
export default {
  name: "input",
  mounted() {},
  data() {
    return {
      input: "lalal"
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
