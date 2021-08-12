<template>
  <div id="app">
    <!-- <avatar size="100" :url="'https://www.chachaba.com/news/uploads/210809/7545_210809162932_1.jpg'" />
    <Icon  :type="'home'" /> -->
    <Pager  :current="current" :total="total" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
// import Avatar from './components/Avatar.vue';
// import Icon from './components/Icon.vue';
import Pager from './index.vue';
import "../../styles/global.less";

export default {
  name: 'App',
  data(){
    return{
      current:1,
      total:302,
    }
  },
  components: {
    Pager
  },
  methods:{
    handlePageChange(newPage){
      console.log('Pager to:',newPage);
      this.current = newPage;

    }
  }
}
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
</style>
