<template>
  <div class="pager-container" >
        <a href="#" @click="handleClick(1)" :class="{disable: current === 1}">首页</a>
        <a href="#" @click="handleClick(current-1)" :class="{disable: current === 1}" >&lt;&lt;</a>
        <a href="#" @click="handleClick(i)" v-for="i in currentArr" :key="i" :class="{active:current === i }">{{i}}</a>
        <a href="#" @click="handleClick(current+1)" :class="{disable: current === pageNumber}">&gt;&gt;</a>
        <a href="#" @click="handleClick(pageNumber)" :class="{disable: current === pageNumber}" >末页</a>
  </div>
</template>

<script>
export default { 
  data(){
    return{
    }
  },
  props:{
    current:{
      type:Number,
      default:1,
    },
    total:{
      type:Number,
      default:0,
    },
    limit:{
      type:Number,
      default:10,
    },
    visableNumber:{
      type:Number,
      default:10,
    }

  },
  computed:{
    pageNumber(){
      return Math.ceil(this.total/this.limit);
    },
    visableMin(){
      let min = this.current - this.visableNumber/2;
      if (min<1){
        min = 1
      }
      return min;
    },
    visableMax(){
      let max = this.visableMin +this.visableNumber -1;
      if(max>this.pageNumber){
        max = this.pageNumber
      }
      return max;
    },
    currentArr(){
      let nums = [];

      for(let i = this.visableMin;i<=this.visableMax;i++){
        nums.push(i)
      }
      return nums;
    }
  },
  methods:{
    handleClick(newPage){
      if(newPage<1){
        newPage =1;
        return;
      }
      if(newPage >this.pageNumber){
        return;
      }
      if(this.current == newPage){
        return;
      }
      this.$emit('pageChange',newPage);
    }
  }
}
</script>

<style lang="less" scoped>
// ~@ 在样式里代表src目录
@import url('~@/styles/var.less');
  .pager-container{
    display: flex;
    justify-content: center;
    
  }
  a{
    color:@primary;
    margin:0 6px;
    cursor: pointer;
    &.disable{
      color:@lightWords;
      cursor: not-allowed;
    }
    &.active{
      color:@words;
      font-weight: bolder;
      cursor: text;
    }

  }
  
</style>