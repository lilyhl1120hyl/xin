<template>
    <div class="app-shop">
     
      <!--导航及品牌特卖等-->
    <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a class="mui-control-item" href="#item1mobile">分类</a>
					<a class="mui-control-item" href="#item2mobile">品牌</a>
			
				</div>
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
           </div>
     </div>


       <!--面部护肤-->
	     <div class="m-nav"> 
		        <div class="hr"></div>
				<div>面部护肤 </div>
				<div class="hr"></div> 
		  </div>
			<div class="group">
				<div id="item1" class="active">
					<ul class="view">
						<!--循环遍历-->
						<li class="cell" v-for="item in selectlist" :key="item.id">
							<img :src="item.img_url">
							<p>{{item.title}}</p>	
						</li>
								
					</ul>
						
				</div>
			</div>
		
       <!--男士护肤-->
	    <div class="m-nav"> 
		        <div class="hr"></div>
				<div>男士护肤 </div>
				<div class="hr"></div> 
		  </div>
			<div class="group">
				<div id="item1" class="active">
					<ul class="view">
						<!--循环遍历-->
						<li class="cell" v-for="item in selectlist" :key="item.id">
							<img :src="item.img_url">
							<p>{{item.title}}</p>	
						</li>
								
					</ul>
						
				</div>
			</div>
	
	   <!--彩妆护理-->
		 <div class="m-nav"> 
		        <div class="hr"></div>
				<div>彩妆护理 </div>
				<div class="hr"></div> 
		  </div>
			<div class="group">
				<div id="item1" class="active">
					<ul class="view">
						<!--循环遍历-->
						<li class="cell" v-for="item in selectlist" :key="item.id">
							<img :src="item.img_url">
							<p>{{item.title}}</p>	
						</li>
								
					</ul>
						
				</div>
			</div>


  </div>
</template>

<script>
    export default{
        data(){
            return{
                selectlist:[],
            }
        },
        methods:{
            getselectList(){
              //发送ajax请求，并且获取图片列表并且显示
         var url="http://127.0.0.1:3000/selectlist";
         this.$http.get(url).then(result=>{
           this.selectlist= result.body;
            }  
          )}

		},
        created(){
          this.getselectList();
        }

    }
</script>

<style scoped>
  .cell{
	  width:60px;
	  height:60px;
	  padding:2px;
	  margin:10px 15px;
  }  
   .cell img{
	   width:100%;
   }
   .view{
	   list-style:none;
	   display:flex ;
	   justify-content:space-between;
	   flex-wrap:wrap;
	   margin:0;
	   padding:0;
   }
   .hr{
	   width:50px;
	   height:2px;
       border:1px solid #F79DBC;
	   margin:auto;
   }
   .m-nav{
	   width:50%;
	   margin:0 auto;
	   display:flex;
	   justify-content:space-around;
   }
   .group{
	   margin:10px 0 25px 0;
   }
</style>