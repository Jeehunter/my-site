import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";

const router = new VueRouter({
  //路由配置
  routes:[
    {path:"/",component:Home},
    {path:"/about",component:About},
    {path:"/blog",component:Blog},
    {path:"/project",component:Project},
    {path:"/message",component:Message},
  ] ,
  mode:"history"//hash history 
  
});
export default router;