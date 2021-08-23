<template>
  <div id="app">
    <!-- <avatar size="100" :url="'https://www.chachaba.com/news/uploads/210809/7545_210809162932_1.jpg'" />
    <Icon  :type="'home'" /> -->
    <div class="test-container">
      <Empty :text="'显示的文字'" />
    </div>
  </div>
</template>

<script>
// import Avatar from './components/Avatar.vue';
// import Icon from './components/Icon.vue';
import Empty from "./index.vue";

export default {
  name: "App",
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  components: {
    Empty,
  },
  methods: {
    handlePageChange(newPage) {
      console.log("Pager to:", newPage);
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
.test-container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #f40;
}
.empty-container {
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
