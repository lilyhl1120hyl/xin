import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//引入mui组件

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//引入组件mintui库Header
//-引入指定组件
//import {Swipe,SwipeItem,Button} from "mint-ui"; 
//-注册当前项目中 <mt-header>    "tt-header"
//Vue.component(Swipe.name,Swipe);  //"mt-swipe"
//Vue.component(SwipeItem.name,SwipeItem);
//Vue.component(Button.name,Button);
import MintUI from 'mint-ui'
Vue.use(MintUI)

//引入vue-resource发送ajax请求，引入库中所有的组件
import VueResource from "vue-resource";
//将所有组件注册
Vue.use(VueResource);
//3.main.js创建过滤器,获取时间格式
Vue.filter("dateFilter",function(val){
   var data= new Date(val);
   var y=data.getFullYear();
   var m=data.getMonth()+1;
   var d=data.getDate();
   m<10&&(m="0"+m);     //如果月份小于10 ，在前面加0.&&短路操作
   d<10&&(d="0"+d);
   return `${y}-${m}-${d}`
})
//时分秒过滤器
Vue.filter("datetimeFilter",function(val){
  var data= new Date(val);
  var y=data.getFullYear();
  var m=data.getMonth()+1;
  var d=data.getDate();
  var h=data.getHours();
  var min=data.getMinutes();
  var s=data.getSeconds();
  m<10&&(m="0"+m);     //如果月份小于10 ，在前面加0.&&短路操作
  d<10&&(d="0"+d);
  h<10&&(h="0"+h);
  min<10&&(min="0"+min);
  s<10&&(s="0"+s);
  return `${y}-${m}-${d} ${h}:${min}:${s}`
})




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
