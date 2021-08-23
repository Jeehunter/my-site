import Vue from 'vue'
import App from './App.vue'
import './styles/global.less';
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
import showMessage from "./untils/index";

Vue.use(ElementUI);
// import styles from "./styles/message.module.less";
import getComponentRootDom from "./untils/getComponentRootDom.js";
Vue.prototype.showMessage = showMessage;
Vue.prototype.getComponentRootDom = getComponentRootDom;



// const div = document.createElement('div');
// div.className = styles.message;
// div.innerText="wenben";
// document.body.appendChild(div);

// //得到组件生成的根dom

// import Icon from "./components/Icon";
// var dom  = getComponentRootDom(Icon,{type:"home"})
// console.log(dom)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
