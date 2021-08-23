<template>
  <div class="siteASide-container">
    <Avatar class="avatar-container" :url="avatarUrl" :size="120" />
    <Menu />
    <Contact />
    <div class="copyright-container">
      <p>
        Copyright © 2019-2021 All Rights Reserved.
        <br />黑ICP备18004551号-2 

      </p>
    </div>
  </div>
</template>

<script>
import Avatar from "../Avatar.vue";
import Menu from "../Menu/";
import Contact from "../Contact/";

export default {
  components: {
    Contact,
    Avatar,
    Menu,
  },
  props: {
    avatarUrl: {
      type: String,
    },
  },
};
</script>

<style lang='less' >
@import "~@/styles/var.less";
.siteASide-container {
  display: flex-box;
  position: relative;
  overflow: hidden;
  width: 330px;
  height: 100%;
  background-color: @dark;
}
.avatar-container {
  margin: 50px auto;
}
.contact-container {
  position: relative;
  bottom: 0;
}
.copyright-container{
    position: absolute;
    bottom: 0;
    text-align: center;
}
</style>