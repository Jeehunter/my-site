<template>
<div class="layout-container">
  <slot  class="left" name="left">
      左边栏

  </slot>
  <slot  class="main" name="main"></slot>
  <slot  class="right"  name="right">右边栏</slot>
</div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.layout-container{
    height: 100%;
    width: 100%;
    display: flex;
    .left{
        display: flex;
        flex: 0 0 auto;
        overflow: hidden;
    }
    .main{
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
    }
    .right{
        display: flex;
        flex:0 0 auto;
        overflow: hidden;
    }
}



</style>