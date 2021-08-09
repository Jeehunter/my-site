<template>
    <i class="iconfont" :class="fontClass"></i>

    
    
</template>

<script>
const iconMap ={
            
    home:"icon-Home"
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
    @import url('https://at.alicdn.com/t/font_2730713_dbmu6ocviyv.css');
</style>