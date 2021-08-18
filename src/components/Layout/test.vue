<template>
  <Layout class="layout-container">
    <template v-slot:left>
      <div class="left"></div>
    </template>
<!-- 简写 <template #header></template> -->
    
    <template #main><div class="main"></div></template>
    <template #right>
      <div class="right"></div>
    </template>
  </Layout>
</template>

<script>
import Layout from './';
export default {
    components:{
        Layout
    }
}
</script>

<style lang="less" scoped >
html,body{
    height: 100%;
}
  .layout-container{
    display: flex;
    width: 80%;
    height: 800px;
    border: 1px solid #f40;
    .left{
      height:100%;
      width:200px;
      background-color: lightblue;
    }
    .main{
      height: 100%;
      width: 100px;
      background-color: lightcoral;
    }
    .right{
      height: 100%;
      width: 200px;
    }
  }
  
</style>