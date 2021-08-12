<template>
  <div>
    <li>
      <Icon type="github" />
      <p>{{github}}</p>
    </li>
    <li>
      <Icon type="email" />
      <p>{{}}</p>
    </li>
    <li>
      <Icon type="qq" />
      <p></p>
    </li>
    <li>
      <Icon type="wechat" />
      <p></p>
    </li>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  props:{
      github:{
          type:String,
          required:true,
      }
  }
};
</script>

<style lang='less'>
@import "~@/styles/global.less";
li{
    list-style: none;
}
</style>