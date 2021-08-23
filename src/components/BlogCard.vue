<template>
  <div class="BlogCard-container">
    <div class="blog-summary">
      <div class="words">
        <a :href="blogUrl"
          ><h3>{{ title }}</h3></a
        >
        <p>{{ summary }}</p>

    <div class="info">
      <span>作者:{{ author }}</span>
      <span>{{ date }}</span>
      <span>阅读:{{ pv }}</span>

      <Tag v-for="(item,i) in tags" :key="i"/>
    </div>
      </div>
      <div class="img">
        <img :src="imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag.vue';
export default {
  components:{
    Tag
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    pv: {
      type: Number,
      required: true,
    },
    blogUrl: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: false,
      default: "https://pic.chaqiuqian.com/default.webp",
    },
    tags:{
      type:Array,
      required:false
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.BlogCard-container {
  position: relative;
  border-bottom: 1px solid @gray;
  .blog-summary {
    overflow: hidden;
  }
  .img {
      display: inline-block;
    width: 206px;
    height: 116px;

    padding-top: 15px;
    padding-left: 15px;
  }
  .words {
    display: inline-block;
    overflow: hidden;

    width: 650px;
    height: 150px;
    vertical-align: top;
    h3{
        overflow: hidden;
    }
    p{
        overflow: hidden;
    }
 .info {
     font-size: 0.9em;
     color: #aaa;
    span {
      margin-right: 20px;
    }
  }
  }


}
</style>