import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "./components/tabbar/homeContainer.vue"
import selectContainer from "./components/tabbar/selectContainer.vue"
import shopContainer from "./components/tabbar/shopContainer.vue"
import comment from "./components/goods/comment.vue"  //子组件测试用
import jx from "./components/sub/jx-temp.vue"
import goodsdetail from "./components/goods/goodsdetail.vue"
import shopcarContainer from "./components/tabbar/shopcarContainer.vue"
import myContainer from "./components/tabbar/myContainer.vue"
import login from "./components/login/login.vue"
import register from "./components/login/register.vue"



Vue.use(Router)



export default new Router({
  routes: [
    {path:"/",component:homeContainer},
    {path:"/home",component:homeContainer},
    {path:"/select",component:selectContainer},
    {path:"/shop",component:shopContainer},
   {path:"/comment",component:comment},// 子组件测试
   {path:"/jx",component:jx},
   {path:"/shopcar",component:shopcarContainer},
   {path:"/my",component:myContainer},
   {path:"/detail",component:goodsdetail},
   {path:"/login",component:login},
   {path:"/register",component:register}
 
  ]
})

//http://127.0.0.1:3001/#/test