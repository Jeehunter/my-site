<template>
    <i class="iconfont icon-container" :class="fontClass"></i>

    
    
</template>

<script>
const iconMap ={
            
    home:"icon-Home",
    empty:"icon-empty",
    github:"icon-github1",
    email:"icon-youxiang",
    wechat:"icon-weixin",
    qq:"icon-qq",
    blog:"icon-Newspaper",
    about:"icon-guanyu",
    code:"icon-daima",
    comment:"icon-Commentalt",
    error:"icon-error",
    warn:"icon-warn",
    success:"icon-success",
    info:"icon-info"
}

export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        fontClass(){
            return iconMap[this.type]
        }
    }
}
</script>

<style scoped>
    @import url('//at.alicdn.com/t/font_2730713_l12nv4q1b6e.css');
    i{
        font-size: inherit;
        color: inherit;
    }
</style>