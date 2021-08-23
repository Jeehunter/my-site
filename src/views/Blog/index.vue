<template>
<div class="blog-container">
  <div class="content-wrapper">
    <div>
      <BlogCard  v-for="item in blogList" :key="item.blogId" :title="item.title" :blogUrl="item.blogUrl" :author="item.author" :date="item.date" :summary="item.summary" :pv="item.pv" :imgUrl="item.imgUrl" :tags="item.tags" />

    </div>
    <el-button class="el-button" @click="getlist">获取列表</el-button>
  </div>

</div>



</template>

<script>
import BlogCard from "@/components/BlogCard.vue";

export default {
  data(){
    return{
      blogList:[
        // {blogId:1,
        // title: "这是第2个文章",
        // summary: "这是这文章的详细信息",
        // author: "Jeehunter",
        // date: 20210823,
        // pv:11
        // }

      ]
    }
  },
  components:{
    BlogCard
  },

  methods: {
    getlist() {
      this.blogList.push({
        blogId:2,
        title: "这是第一个文章",
        summary: "这是这文章的详细信息是这文章的详细信息是这文章的详细信息是这文章的详细信息是这文章的详细信息是这文章的详细信息是这文章的详细信息是这文章的详细信息",
        author: "Jeehunter",
        date: 20210823,
        pv:12,
        blogUrl:"#",
        tags:[{tagWord:'Vue',tagColor:"#f40"}]
      });

      console.log(this.blogList)
    },
  },
};
</script>

<style scoped>
.blog-container{
  display: flex;
}
.content-wrapper{
  
  margin-left: 50px;
  height: 900px;
  width: 900px;
  border: 1px solid #f40;
  overflow: auto;
}
.el-button{
  margin:100px auto;

}

</style>