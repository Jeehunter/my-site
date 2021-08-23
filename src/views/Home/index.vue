<template>
  <div id="scene">
    <div ref="sceneRef">
      <div data-depth="0.2">
        <div @mouseenter="parallax">
          <img src="https://pic.chaqiuqian.com/bg.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div class="login-card">
      <el-input class="el-input" v-model="inputUserName" placeholder="请输入用户名"></el-input>
      <el-input class="el-input"
        v-model="inputUserPassword"
        show-password
        placeholder="请输入密码"
      ></el-input>
      <el-button class="el-button-login">登录</el-button>
      <el-button class="el-button-register">注册</el-button>
    </div>
    <div class="author">Jeehunter</div>
  </div>
</template>





<script>
import Parallax from "parallax-js";

export default {
  data() {
    return {
      inputUserName: "",
      inputUserPassword: ""
    };
  },

  methods: {
    parallax: function () {
      let sceneDom = this.$refs.sceneRef;
      const parallaxInstance = new Parallax(sceneDom);
      console.log(parallaxInstance);
    },
  },
};
</script>

<style lang="less"  scoped>
#scene {
  position: relative;
  height: 100%;
  width: 100%;
  /* background-image: url('https://pic.chaqiuqian.com/bg.jpeg'); */
  background-size: cover;
  /* margin-left: -50px; */
  margin-left: -70px;
  transform: scale(120%);
}
.login-card {
  position: fixed;
  top: 50%;
  right: 15%;
  height: 180px;
  width: 23%;
  padding: 20px 30px;

  background-color: rgba(255, 255, 255, 0.1);
  z-index: 2;
  box-sizing: border-box;
  .el-input{
    margin-bottom: 10px;
  }
}
.el-button-login{
  background-color: #409EFF;
  border-color: #409EFF;
  color: #fff;
}

.author {
  position: fixed;

  bottom: 20%;
  right: 15%;
  z-index: 2;
  color: #fff;
}
</style>