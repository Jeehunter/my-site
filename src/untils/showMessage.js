import Icon from "@/components/Icon";

import getComponentRootDom from "./getComponentRootDom";
import styles from "@/styles/message.module.less";

/*
@param {String} contect 消息内容
@param {String} type 消息类型 默认info info error success warn
Number duration 弹窗持续时间 默认2000
HTMLElement container 容器，消息会显示容器在正中，如果没有传值，则显示在整个页面的正中


*/ 



// import Styles from "./showMessage.module.less";
export default function(contect,type="info",duration=2000,container){

    //创建消息元素
    console.log('showMessage!');
    console.log("Icon:"+Icon);
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon,{type});

    
    div.innerHTML = `<span class="${styles.icon}" >${iconDom.outerHTML} </span><div>${contect}</div>`;
    //设置样式
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;
    //将div加入容器
    if(!container){
        container = document.body;
    }
    else{
        //检测容器的position是否改动 如果是static,证明没有改动
        if(getComputedStyle(container).position === "static"){
            container.styles.position = 'relative';
        }
    }
    container.appendChild(div);
    div.clientHeight;//reflow

    div.style.opacity = 1;
    div.style.transform =`translate(-50%,-150%)`;
    div.style.transition = `0.7s`;
    setInterval(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-350%),translateY(-25px)`;
        div.addEventListener("transitionend",function(){
            div.remove();
        },{once:true})
    }, duration);

    // console.log(Styles);

}
