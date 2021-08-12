<template>
  <div class="image-loader-container">
    <img v-if="!allDone" class="placeholder" :src="placeholder" alt="" />
    <img class="origin" :src="url" alt="" @load="handleLoad" :style="{opacity:originOpacity,transition:`${duration}ms`}" />
  </div>
</template>

<script>
// src 原始图片路径; placeholder 原始图片加载完之前的站位图片;duration原始图片加载完之后，切换到原始图片所需要的毫秒数;
//load 原始图片加载完触发
export default {
  data() {
    return {
      originLoaded: false, //原图加载是否完成
      allDone:false,//是否彻底完成src图片
    };
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      console.log("组件的load事件触发，图片加载完成");
      setTimeout(() => {
        this.allDone = true;
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
}
.placeholder {
  filter: blur(2vw);
}
</style>