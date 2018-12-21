<template>
   <div class="app-goodsdetail">
      <!--tab-bar-->
      <header class="mui-bar mui-bar-nav">
            <router-link :to="back">
               <span class="mui-icon mui-icon-undo"></span>
            </router-link>
			<h2 class="mui-title">韩束鲜活透亮补水套装</h2>
            <a class="active"><span class="mui-icon-extra mui-icon-extra-share"></span></a>
		</header>
        <!--大图视频展示-->
        <div class="card-content-inner">
			 <video src="../../img/bbl.mp4" autoplay pool muted loop class="video"  preload="metadata" @click.prevent.stop="pauseVideo()">
             您的浏览器版本太低，请升级！
            </video> 	
                <img src="../../img/play.png" class="ctrl" @click.prevent.stop="addImg()" />
         
		</div>

        <!--标题与描述-->
        <div class="t-detail">
           <p class="p-detail">
             <span>{{sp.title}}</span>
             <span>{{sp.detail}}</span>
             <span>|</span>
             <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
           </p>
           <p class="s-detail">¥: <span>{{sp.now}}</span> 
            <del>¥:{{sp.old}}</del></p>
        </div>

       <!--列表免邮，花粉等-->
        <ul class="m-table-view">
				<li class="m-table-view-cell ">
					<div class="m-media-body">
						<p>	免邮 </p>
						<p>全场满99元包邮</p>
					</div>
				</li>
				<li class="m-table-view-cell ">
					<div class="m-media-body">
						<p>	花粉</p>
						<p>购买最多获取99个花粉</p>
					</div>	
				</li>
				<li class="m-table-view-cell ">
					<div class="m-body">
						<p>正品保证</p>
                        <p>品牌授权</p>
                        <p>7天包退</p>
					</div>
				</li>
			</ul>
          <!--滑动导航-->
            <div class="content1" >
					<a class="control-item" @click.prevent.stop="show_not($event,index)" v-for="(item,index) in lassify" :key="item.id" :class="{'b-link':index===pno}">
				  {{item.text}}
		    	 </a>
			 </div>
          <div class="content2">
          <!--商品详情栏-->
           <ul class="sp-table" v-show="pno==0">
				<li v-for="item in splist" :key="item.id">
					<span>{{item.title}}:</span>
					<span>{{item.detail}}</span>
				</li>
                <li class="btn">
                   <button> 查看更多韩束商品 &gt;</button>
                </li>
           </ul>
         <!--购买说明栏-->
         <ul class="gm-table" v-show="pno==1"> 
             <li v-for="item in gmlist" :key="item.id">
                 <h4>{{item.title}}</h4>
                 <p>{{item.text}}</p>
             </li>
         </ul>
         </div>
         <!--评价列表-->
          <comment-box></comment-box>
       <!---->

         <!--商品详情图片-->
         <div class="imgobj">
             <h4>&lt;&lt; 商品详情 &gt;&gt; </h4>
          <ul>
           <li v-for="item in obj" :key="item.id"> 
                   <img :src="item.img_url" >
            </li>
          </ul>
         </div>
         <!--底部购买-->
          <nav class="mui-bar mui-bar-tab">
               <router-link to="/shopcar">
			      <img src="../../img/cart.png">
               </router-link>
                <button @click="addCart()">加入购物车</button>
		 </nav>
   </div>
</template>

<script>
 import comment from "./comment.vue";

    export default{
        data(){
            return{
                splist:[
                    {title:"商品品牌",detail:"韩束"},
                    {title:"商品名称",detail:"韩束红BB，七分养，三分妆，可以养肤的BB霜"},
                    {title:"套装明细",detail:"韩束红bb。韩束巨补水，墨菊宝石洁面乳+巨补水深度补水露120ML，墨菊巨补水深度滋养精华霜"},
                    {title:"有效期",detail:"2021年10月"},
                    {title:"规格",detail:"均码"},
                    {title:"特点描述",detail:"无暇妆容，全天美丽"},
                    {title:"商品产地",detail:"中国"},
                  ] ,
                  gmlist:[{title:"关于商品",text:"达内学子商城向您保证所售商品均为正品行货，达内自营商品开具机打发票或电子发票。"},
                  {title:"商品价格说明",text:"达内学子商城向您保证所售商品均为正品行货，达内自营商品开具机打发票或电子发票。"},{title:"售后说明",text:"凭质保证书及达内商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。达内商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！"}],
                 obj:[],
                 aalist:[],
                 pno:0,
                 back:"/",
                 sp:{
                     id:this.$route.query.id,
                     title:this.$route.query.title,
                     now:this.$route.query.now,
                     old:this.$route.query.old,
                     detail:this.$route.query.detail,
                     img_url:this.$route.query.img_url
                 },
                 lassify:[{text:"商品详情"},{text:"购买说明"}],
             }
        },
        methods:{
            getDetail(){
         //发送ajax请求，并且获取内容
         var url="http://127.0.0.1:3000/goodsdetail";
         this.$http.get(url).then(result=>{
           this.obj= result.body;
           
         })
        },
            getaaList(){
        var url="http://127.0.0.1:3000/aalist";
         this.$http.get(url).then(result=>{
           this.aalist= result.body;
          
         })
		  },
        pauseVideo(){
           var v3 = document.querySelector(".video");
           var img = document.querySelector(".ctrl");
           v3.pause();
           img.style.display="block";
        },
          addImg(){
            var v3 = document.querySelector(".video");
            var img = document.querySelector(".ctrl");
            v3.play();
            img.style.display="none";
             
          },
          show_not($event,index){
            this.pno=index;
           },
         addCart(){
             var id=this.sp.id;
             var img_url=this.sp.img_url;
             var title=this.sp.title;
             var now=this.sp.now;
             var details=this.sp.detail;
             this.$http.get("http://127.0.0.1:3000/addcart?id="+id+"&title="+title+"&now="+now+"&details="+details+"&img_url="+img_url) ;
             this.$toast("加入购物车") 
         }
       
        },
    
    created(){
    //接收路径跳转
    //console.log(this.$route.query.id);
      this.getDetail();
      this.addImg();
      this.pauseVideo();
      this.show_not();
      this.getaaList();
      /*this.getSp();*/
       },
     components:{
        "comment-box":comment,
     }

    }
</script>
<style scoped>
 .app-goodsdetail .active{
      position:absolute;
      top:10px;
      right:10px;
  }
  .video{
      width:100%;
      height:100%;
  }
  .card-content-inner{
      position:relative;
      width:100%;
      height:200px;
      margin-top:10px ;
     
  }
  .ctrl{
      position:absolute;
      top:50%;
      left:50%;
      margin-top:-25px;
      margin-left:-25px;
      width:50px;
      height:50px;
      display:none;
  }
  .t-detail{
      padding:0 5px;
  }
 .p-detail{
     width:100%;
     height:60px;
     display:flex;
     padding:10px 0;
     margin:0;
     justify-content:around;
 } 
 .p-detail span:nth-child(1){
     font-size:16px;
     color:red;
     padding:0 10px;
 }
 .p-detail span:nth-child(2){
     width:60%;
     overflow: hidden;
     text-overflow:ellipsis;
     white-space: nowrap;
 }
 .p-detail span:nth-child(3){
    padding:0 10px;
    font-size:30px;
 }
 .s-detail{
     text-align:left;
     padding:0 20px;
 }
 .s-detail span:nth-child(1){
      color:red;
      font-size:18px;
 }
 .m-table-view{
     list-style:none;
     margin:0;
     padding-left:10px;
 }
 .m-media-body{
     display:flex;
     justify-content:start;
     border-top:1px solid #E0DEDE;
     padding-top:5px ;
 }
 .m-media-body .bor-bot{
     border-bottom:1px solid red;
 }
 .m-media-body p:nth-child(1){
   font-size:14px;
   color:white;
   background:#FF0056;
   padding:2px 10px;
   margin-right:10px;
 }
 .m-body{
     display:flex;
     justify-content:space-around;
     border-top:1px dashed #C6C4C4;
     border-bottom:1px dashed #C6C4C4;
     width:100%;
     height:30px;
     text-align:center;
     line-height:30px;
 }
 .content1{
  display:flex;
  justify-content:space-around;
  height:40px;
  padding:5px 0;
  margin:0;
}
.content1 a{
  color:black;
  font-size:16px;
}
 .b-link{
  width:40%;
  border-bottom:2px solid #7CB9FB;
  text-align:center;
  height:30px;
}
.content2 .sp-table{
    list-style:none;
    margin:0;
    padding:0;
    padding-top:10px;
    
}
.content2 .sp-table .btn button{
    margin:10px auto;
    border:1px solid #FF0056;

}
.content2 .sp-table li{
    display:flex;
  justify-content:start;
}
.content2 .sp-table li span:first-child{
    font-size:14px;
    padding:0 10px;
    width:25%;
}
.content2 .sp-table li span:last-child{
    font-size:14px;
    padding:0 10px;
    display:block;
    width:70%;
    color:#8F8F94;
}
.content2 .gm-table{
    list-style:none;
    padding:0;
    padding-top:10px;
}
.content2 .gm-table li h4{
    text-align:center;
}
.imgobj ul{
   list-style: none;
   padding: 0;
}
.imgobj h4{
    text-align: center;
    padding:10px 0;
    border-top:1px solid #C0C0C0;
    border-bottom:1px solid #C0C0C0;
}

.imgobj ul li,.imgobj ul li img{
    width:100%;
    padding:0;
    margin:0;
    vertical-align: middle;
}
.mui-bar{
    z-index:100;
     display:flex;
     justify-content:space-between;
}
.mui-bar img{
    width:50px;
    height:50px;
    margin:0 10px;
    padding:5px;
}
.mui-bar button{
    width:30%;
    height:40px;
    padding:10px;
    background:#FF0056;
    margin:5px;
    color:white;
}

</style>