<template>
    <img class="avatar-container" :height="size+'px'" :width="size+'px'" :src="url" alt="用户头像">
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:50
        }
    }
}
</script>

<style scoped>
    .avatar-container{
        display: block;
        border-radius: 50%;
        object-fit: cover;
    }
</style>