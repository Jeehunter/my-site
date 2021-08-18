<template>
  <div class="contact-container">
    <li class="icon">
      <a href="https://github.com/Jeehunter/">
        <Icon type="github" />
        <span>github.com/Jeehunter</span>
      </a>
    </li>
    <li class="icon">
      <a href="mailto:niejihang@qq.com">
        <Icon type="email" />
        <span> niejihang@qq.com</span></a
      >
    </li>
    <li class="icon">
      <a href="tencent://message/?uin=709121402&Site=&Menu-=yes">
        <Icon type="qq" />
        <span>709121402</span></a
      >
    </li>
    <li class="wechat-container icon">
      <a>
        <Icon type="wechat" />
        <span>Jeehunter_coldroom[二维码]</span></a
      >
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
  margin: 18px 0;
}

.contact-container {
  width: 100%;
  color: @lightWords;
  list-style: none;
  padding: 0;
  margin: 0;
  .icon {
    span {
      font-size: 15px;
      position: relative;
    }

    a {
      display: inline-flex;
      align-items: center;
      margin-left: 10px;
      font-size: 15px;
    }
  }
}

.icon-container {
  height: 30px;
  width: 30px;
  font-size: 30px;
  margin-right: 0.5rem;
}

.wechat-container {
  .pop {
    display: block;
    position: relative;
    left: 50px;
    top: -180px;
    height: 120px;
    width: 120px;
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.5s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    .pop {
      display: block;
      transform: scaleY(1);
    }
    .pop::after {
      position: relative;
      left: 50px;
      top: 0px;
      display: block;
      height: 0px;
      width: 0px;
      z-index: 2;
      content: "";
      border-style: solid;
      border-width: 10px;
      border-color: rgba(0, 0, 0, 0);
      border-top-color: #fff;
      border-right-color: rgba(0, 0, 0, 0);
      border-bottom-color: rgba(0, 0, 0, 0);
    }
  }
}
</style>