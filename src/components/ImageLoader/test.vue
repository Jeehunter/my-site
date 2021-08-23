<template>
  <div class="test-container">
    <ImageLoader url="https://pic.chaqiuqian.com/pic/xiangling.jpg" placeholder="https://img2.baidu.com/it/u=1366471081,236895568&fm=26&fmt=auto&gp=0.jpg" />
  </div>
</template>

<script>
import ImageLoader from "./";

export default {
  components: {
    ImageLoader,
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid #f40;
  margin: 0 auto;
}
</style>