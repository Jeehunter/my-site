<template>
  <div class="menu-container">
    <a :href="item.link" v-for="item in items" :key="item.id" @click="isSelected(item.link)" :class="{'selected':isSelected(item.link)}"> 
      <div class="icon"><Icon class="icon" :type="item.icon" /></div>
      <span>{{ item.title }}</span>
    </a>
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
        { id: 1, link: "/", title: "首页", icon: "home" },
        { id: 2, link: "/blog", title: "文章", icon: "blog" },
        { id: 3, link: "/about", title: "关于我", icon: "about" },
        { id: 4, link: "/code", title: "项目&效果", icon: "code" },
        { id: 5, link: "/comment", title: "留言板", icon: "comment" },
      ],
    }
    
  },
  methods:{
      isSelected(path){
          return location.pathname.toLowerCase() === path.toLowerCase();
      }
  }
};
</script>

<style lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
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
  .selected {
      color: darken(@words,7%);
      background-color: @gray;
    }
}
</style>