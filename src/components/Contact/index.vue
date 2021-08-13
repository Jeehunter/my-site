<template>
  <div class="contact-container">
    <li class="icon">
      <span><Icon type="github" /></span>
      
      <a href="https://github.com/Jeehunter/">github.com/Jeehunter</a>
    </li>
    <li class="icon">
      <span><Icon type="email" /></span>
      
      <a href="mailto:niejihang@qq.com">niejihang@qq.com</a>
    </li>
    <li class="icon">
      <span><Icon type="qq" /></span>
      <a href="tencent://message/?uin=709121402&Site=&Menu-=yes">709121402</a>
    </li>
    <li class="wechat-container icon">
      <span><Icon type="wechat" /></span>
      <a>Jeehunter_coldroom[二维码]</a>
      <div class="pop">
        <img src="https://pic.chaqiuqian.com/pic/wechatQR.png" alt="" />
      </div>
    </li>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import "@/styles/global.less";
export default {
  components: {
    Icon,
  },

};
</script>

<style lang='less' scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";


li {
  height: 30px;
  line-height: 30px;
  margin: 14px 0;
}

.contact-container {
  width: 100%;
  background-color: inherit;
  list-style: none;
  padding: 0;
  margin: 0;
  .icon {
    span{
      font-size: 27px;
        position: relative;
  top: 0.1rem;
    }
    
    a {
      display: inline-flex;
      align-items: center;
      margin-left: 10px;
      font-size: 20px;
    }
  }
}

.icon-container {
  height: 50px;
  width: 50px;
}

.wechat-container {
  .pop {
    display: none;
    left: 0;
  height: 100%;
  width: 100%;
    padding: 10px 15px;
    border-radius: 5px;

    &:hover {
      .pop {
        display: block;
      }
    }
  }
}
</style>