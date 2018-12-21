<template>
    <div class="app-shop">
       <!--轮播图-->
           <swiper-box :list="list"></swiper-box>
       <!--导航小图标-->
           <div class="little">
              <ul class="little-view">
                  <li v-for="item in littlelist" class="little-item" :key="item.id">
                    <a> <img :src="item.img_url" class="little-img"> </a>
                     <p> {{item.title}} </p>
                  </li>
              </ul>
           </div>
       <!--护肤攻略-->
       <div class="a-nav">
            <div class="a-nav-lg">[</div>
            <div class="a-nav-font">护肤攻略 <span>SKIN CARE</span></div>
            <div class="a-nav-lg">]</div>
       </div>
       <div>
           <ul class="hfgl-view">
                  <li v-for="item in hfgllist" class="hfgl-item" :key="item.id">
                    <a> <img :src="item.img_url" class="hfgl-img"> </a>
                  </li>
              </ul>
       </div>
       <!--品牌馆-->
      <div class="a-nav">
            <div class="a-nav-lg">[</div>
            <div class="a-nav-font">品牌馆 <span>BRAND SHOP</span></div>
            <div class="a-nav-lg">]</div>
       </div>
      <div>
           <ul class="pp-view">
                  <li v-for="item in pplist" class="pp-item" :key="item.id">
                    <a> <img :src="item.img_url" class="pp-img"> </a>
                  </li>
              </ul>
       </div>
       <!--人气精华榜-->
       <div class="a-nav">
            <div class="a-nav-lg">[</div>
            <div class="a-nav-font" id="font-1">人气精华榜<span>ELITE LIST</span></div>
            <div class="a-nav-lg">]</div>
       </div>
       <div class="app-goodlist">
         <div class="good-item" v-for="item in goodlist" :key="item.id" >
             <img :src="item.img_url">
             <p class="goodtitle">{{item.title}}
             <span class="details">  {{item.details}}</span></p>
              
              <div class="info">
                 <div class="price">
                    <span class="new">¥:{{item.new}}</span>
                    <del class="old"> ¥:{{item.old}} </del>
                     <a class="active"><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
                 </div>
                 
              </div>
         </div>
        
    </div>

    <!--top小图标-->
        <div class="xtb"> <a href="#"><img src="../../img/tt.png"></a> </div>
       



   </div>
</template>

<script>
  import swiper from "../sub/swiper.vue";
    export default{
        data(){
            return{
             list:[],
             littlelist:[],
             hfgllist:[],
             pplist:[],
             goodlist:[],

            }
        },
        methods:{
               getImage(){
            //发送ajax请求，并且获取图片列表并且显示
                var url="http://127.0.0.1:3000/imagelist";
                 this.$http.get(url).then(result=>{
                  this.list=result.body;
                 })
               },
            getlittleList(){
                var url="http://127.0.0.1:3000/littlelist";
                 this.$http.get(url).then(result=>{
                  this.littlelist= result.body;
                 })
            },
             gethfglList(){
                var url="http://127.0.0.1:3000/hfgllist";
                 this.$http.get(url).then(result=>{
                  this.hfgllist= result.body;
                 })
            },
               getppList(){
                var url="http://127.0.0.1:3000/pplist";
                 this.$http.get(url).then(result=>{
                  this.pplist= result.body;
                 })
            },
          getgoodList(){
                var url="http://127.0.0.1:3000/goodlist";
                 this.$http.get(url).then(result=>{
                  this.goodlist= result.body;
                 })
            },

        
        },
        created(){
           this.getImage();
           this.getlittleList();
           this.gethfglList();
           this.getppList();
           this.getgoodList();
          
        },
        components:{
			"swiper-box":swiper
		}

    }
</script>

<style scoped>
   .little-view,.hfgl-view,.pp-view{
       list-style:none;
       padding:0;
       margin:0;
       display:flex;
       justify-content:space-between;
       flex-wrap:wrap;
   }
   .little-view{
       margin-bottom:20px;
   }
  .little-item{
         width:70px;
         height:70px;
         margin:15px 10px;
     }
     .little-item p{
       text-align:center;
     }
  .little-img{
      width:100%;
  }
  .a-nav{
      margin:2px 0;
      height:40px;
      display:flex;
      justify-content:center;
      background:#E3E3E3;
  }
 .a-nav .a-nav-font{
     color:red;
     font-weight:bold;
     width:72px;
     text-align:center;
 }
 #font-1{
     width:92px;
    
 }
  .a-nav .a-nav-font span{
     font-size:6px;
 }
 .a-nav .a-nav-lg{
     height:40px;
     font-size:40px;
     margin-top:6px;
     color:#9D9D9D;
 }
 .hfgl-item{
     width:49.5%;
 }
 .hfgl-item a img{
     width:100%;
 }
 .pp-item{
     width:32.5%;
 }
  .pp-item a img{
     width:100%;
 }
 .app-goodlist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:6px;
    }
    .good-item img{
        width:100%;
        height:60%;
    }
    .app-goodlist .good-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:263px;
    }
 .new{
     font-size:16px;
     font-weight:bold;
     color:red;
 }
 .old{
     font-size:12px;
 }
 .goodtitle .details{
     font-size:12px;
     color:gray;
     width:10%;

 }

 .goodtitle{
     font-size:14px;
     font-weight:bold;
     color:black;
 }
.mui-icon-extra{
    margin-left:20px;
}

.xtb{
  width:50px;
  height:50px;
  position:fixed;
  top:550px;
  left:300px;
}
.xtb img{
  width:100%;
  height:100%;
}
</style>