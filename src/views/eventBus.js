import Vue from "vue";

export default new Vue({});

//如何使用总线:
/*
1 引入
2
function  handler1(data){
    console.log("handler1",data);
}

function handler2(data){
    console.log("handler2",data);
}
eventBus.$on("event1",handler1);
eventBus.$on("event1",handler2);
eventBus.$on("event2",handler1);












*/