<!-- 页面 -->
<template>
  <div class="container">
    <g-button @click="handleOpenMessage3" type="info">默认</g-button>
    <g-button @click="handleOpenMessage2" type="success">成功</g-button>
    <g-button @click="handleOpenMessage4" type="warning">警告</g-button>
    <g-button @click="handleOpenMessage5" type="danger">错误</g-button>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import Button from "~/src/components/button";
import message from '~/src/components/Plugins/message.js'
import Vue from "vue";
Vue.use(message);
  export default {
    name: "GToast",
    components:{
      'g-button':Button
    },
    mounted() {
    },
    data() {
      return {
        html:`
        <g-button @click="handleOpenMessage3" type="info">默认</g-button>
        <g-button @click="handleOpenMessage2" type="success">成功</g-button>
        <g-button @click="handleOpenMessage4" type="warning">警告</g-button>
        <g-button @click="handleOpenMessage5" type="danger">错误</g-button>
          methods: {
            handleOpenMessage3() {
              this.$message('这是一条消息提示');
            },
            handleOpenMessage2() {
              this.$message({
                message:'恭喜你，这是一条成功消息',
                type: "success",
                position:'top'
              });
            },
            handleOpenMessage4() {
              this.$message({
                message: '警告哦，这是一条警告消息',
                type: "warning",
                position:'bottom'
              });
            },
            handleOpenMessage5() {
              this.$message({
                message:'错了哦，这是一条错误消息',
                type: "error",
                position:'middle'
              });
            }
          }
        `
      };
    },
    methods: {
      handleOpenMessage3() {
        this.$message('这是一条消息提示');
      },
      handleOpenMessage2() {
        this.$message({
          message:'恭喜你，这是一条成功消息',
          type: "success",
          position:'top'
        });
      },
      handleOpenMessage4() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: "warning",
          position:'bottom'
        });
      },
      handleOpenMessage5() {
        this.$message({
          message:'错了哦，这是一条错误消息',
          type: "error",
          position:'middle'
        });
      }
    }
  };
</script>
<style lang='scss' scoped></style>
