<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteASide avatarUrl="https://pic.chaqiuqian.com/avatar.png"/>
        </div>
        
      </template>

      <template #main>
        <div class="main"></div>
      </template>
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
  methods: {},
};
</script>

<style>
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
  display: flex;
}
.left{
  
  width: 300px;
  height: 100%;
}
</style>
