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
    comment:"icon-Commentalt"
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
    @import url('//at.alicdn.com/t/font_2730713_j8nw7rnzn5h.css');
    i{
        font-size: inherit;
        color: inherit;
    }
</style>