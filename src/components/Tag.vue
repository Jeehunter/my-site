<template>
  <span :style="{'color':tagColor}">
      {{tagWord}}
  </span>
</template>

<script>
export default {
    props:{
        tagWord:{
            type:String,
            required:true
        },
        tagColor:{
            type:String,
            required:true
        }
    }
}
</script>

<style>

</style>