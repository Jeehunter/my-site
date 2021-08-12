<template>
  <div class="empty-container" >
      <Icon :type="'empty'"  />
      <p class="empty-description">{{text}}</p>
  </div>
</template>

<script>
import Icon from "../Icon.vue"

export default {
    components:{
        Icon
    },
    props:{

        text:{ 
            type:String,
            default:'无数据'
        }
    }
}
</script>

<style scoped lang='less'>
    @import "~@/styles/mixin.less";
    @import "~@/styles/var.less";
    .empty-container{
        .self-center();
        text-align: center;
        color:@gray;
    }
    .icon-container{
        font-size: 72px;
        color:@gray;
    }

</style>