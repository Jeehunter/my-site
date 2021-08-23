<template>
  <div id="app">
    <Layout class="layout-container">
      <template #left>
        <div class="left">
          <SiteASide avatarUrl="https://pic.chaqiuqian.com/avatar.png"/>
        </div>
        
      </template>

      <template #main>
        <div class="main">
          <router-view></router-view>
          

        </div>
      </template>
      <!-- <template #right>
        <div class="right">
          <router-view></router-view>
        </div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
// import Avatar from './components/Avatar.vue';
// import Icon from './components/Icon.vue';
import Layout from "./components/Layout";
import SiteASide from "./components/SiteASide";
import "./styles/global.less";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Layout,
    SiteASide,
  },
  methods: {
    testShowMessage(){
      this.showMessage('消息内容','info',2000,)
    }

  },
};
</script>

<style >
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body{
  height: 100%;
  width: 100%;
  display: flex;
}
#app{
  width: 100%;
  height: 100%;
}
.left{
  margin: 0;
  padding: 0;
  width: 17%;
  height: 100%;
  z-index: 999;
}
.main{
  height:100%;
  width: 83%;
  /* margin-left: -70px;
  transform: scale(120%); */
  z-index: 1;
}
</style>
