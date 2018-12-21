<template>
   <div  class="app-homeContainer">
      <!--轮播图    2：-->
      <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">  <!--VUE循环对数据排序操作，提升效率使不重复属性-->
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
  <!--十宫格-->
      <div class="m-content">
		        <ul>
		            <li v-for="item in alist" :key="item.id">
                 <a >
                    <img :src="item.img_url">
                    <p>{{item.title}}</p>
                  </a> 
                </li>
                 
		        </ul> 
		</div>
   
	  <!--导航及品牌特卖等-->
    <div class="content" >
					<a class="control-item" @click.prevent.stop="show_not($event,index)" v-for="(item,index) in lassify" :class="{'b-link':index===pno}" :key="item.id">
				  {{item.text}}
		    	</a>
		</div>


        <!--促销专场--> 
        
			  <cx-box v-if="pno==0"></cx-box>
        <tm-box v-else-if="pno==1"></tm-box>
        <jx-box v-else></jx-box>
      
        <!--top小图标-->
        <div class="xtb"> <a href="#"><img src="../../img/tt.png"></a> </div>
       
   </div>
</template>
<script>
  import cx from "../sub/cx-temp.vue"
  import tm from "../sub/tm-temp.vue"
  import jx from "../sub/jx-temp.vue"
  
  export default {
    data(){
      return {
      lassify:[{text:"促销专场"},{text:"品牌专区"},{text:"每日精选"}],
      list:[] ,            //创建一个空数组接收AJAX返回的数据，以便V-for使用
			goodslist:[ ],
      alist:[],
      aalist:[],
      tmlist:[],
      jxlist:[],
      pno:0,
     
    }
      },
    methods:{
      show_not($event,index){
         this.pno=index;
      },
      getImage(){
         //发送ajax请求，并且获取图片列表并且显示
         var url="http://127.0.0.1:3000/imagelist";
         this.$http.get(url).then(result=>{
          
           this.list= result.body;
         })
      },
		  getgoodList(){
        var url="http://127.0.0.1:3000/goodslist";
         this.$http.get(url).then(result=>{
        
           this.goodslist= result.body;
         })
		  },
        getaList(){
        var url="http://127.0.0.1:3000/alist";
         this.$http.get(url).then(result=>{
           this.alist= result.body;
         })
		  },
       getaaList(){
        var url="http://127.0.0.1:3000/aalist";
         this.$http.get(url).then(result=>{
           this.aalist= result.body;
         })
		  },
        gettmList(){
        var url="http://127.0.0.1:3000/tmlist";
         this.$http.get(url).then(result=>{
           this.tmlist= result.body;
         })
		  },
       getjxList(){
        var url="http://127.0.0.1:3000/jxlist";
         this.$http.get(url).then(result=>{
           this.jxlist= result.body;
         })
		  },
    
    },
    created(){
      this.getImage();
			this.getgoodList();
      this.getaList();
      this.getaaList();
      this.gettmList(); 
      this.getjxList();
    },
   components:{
			"cx-box":cx,
      "tm-box":tm,
      "jx-box":jx,
		}
    
  }
</script>




<style scoped>
  /*自定义组件的样式*/
  .header{
    width:100%;
    height:40px;
  }
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:120px;
    margin-top:3px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
    height:100%;
  }
 .app-homeContainer{
   padding:0;
 }
 .m-content ul{
   list-style:none;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
   padding:1px;
 }
 .m-content ul li{
   width:60px;
   height:60px;
   padding:12px 2px;
	 margin:2px 5px;

 }
  .m-content ul li img{
    height:100%;
  }
   .m-content ul li div{
     font-size:4px;
   }
.mui-control-content {
				background-color: white;
				min-height: 215px;
			}
.mui-control-content .mui-loading {
				margin-top: 50px;
			}
p{
  text-align:center;
}
.content{
  display:flex;
  justify-content:space-around;
  height:40px;
  padding:10px 0;
  margin-bottom:10px;
}
.content a{
  color:black;
  font-size:18px;
}

.b-link{
  width:30%;
  border-bottom:2px solid #7CB9FB;
  text-align:center;
  height:30px;
  
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