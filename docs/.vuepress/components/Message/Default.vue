<!-- 页面 -->
<template>
  <div class="container">
    <g-button @click="handleOpenMessage" >默认</g-button>
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
        <g-button @click="handleOpenMessage">默认</g-button>
          methods: {
            handleOpenMessage() {
              this.$message({
                message:'默认提示',
              });
            }
          }
        `
      };
    },
    methods: {
      handleOpenMessage() {
        this.$message({
          message:'默认提示',
        });
      },
    }
  };
</script>
<style lang='scss' scoped></style>
