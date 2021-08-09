<template>
  <div id="app">
    <avatar size="100" :url="'https://www.chachaba.com/news/uploads/210809/7545_210809162932_1.jpg'" />
    <Icon  :type="'home'" />
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue';
import Icon from './components/Icon.vue';

export default {
  name: 'App',
  components: {
    Icon,
    Avatar
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
