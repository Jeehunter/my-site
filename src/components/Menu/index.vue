<template>
  <div class="menu-container">
    <!--  @click="isSelected(item.link)"  :class="{'selected':isSelected(item.link)"  }-->
    <router-link :exact="item.exact"  :to="item.link" v-for="item in items" :key="item.id"> 
      <div class="icon"><Icon class="icon" :type="item.icon" /></div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { id: 1,exact:true , link: "/", title: "首页", icon: "home" },
        { id: 2,exact:false ,link: "/blog", title: "文章", icon: "blog",startwith:true },
        { id: 3,exact:true , link: "/about", title: "关于我", icon: "about" },
        { id: 4,exact:true , link: "/project", title: "项目&效果", icon: "code" },
        { id: 5,exact:true , link: "/comment", title: "留言板", icon: "comment" },
      ],
    }
    
  },
  methods:{
      // isSelected(path){
      //     return location.pathname.toLowerCase() === path.toLowerCase();
      // }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 0px 0;
  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 25px;
      margin-right: 0.1em;
    }
    &:hover {
      color: #fff;
    }
  }
  .router-link-active {
      color: darken(@words,7%);
      background-color: @gray;
    }
}
</style>