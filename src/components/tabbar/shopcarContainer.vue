<template>
    <div class="app-shopcar">
       	<div class="title">购物车</div>

			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in goodlist" :key="item.id">
					<a href="javascript:;">
						    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                       
						  <div class="mui-media-body">
							<p><b>{{item.title}}</b> {{item.details}}</p>
							<p class='mui-ellipsis'>¥：{{item.now}}</p>
                            <p class="btn-plus">
                                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
				                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub(item.id)">-</button>
				                    <input id="test" class="mui-input-numbox" type="number" :value="item.count"/>
				                	<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add(item.id)">+</button>
				                </div>
                                <span class="mui-icon mui-icon-trash" v-on:click="remove(item)"></span>
                           
                             
						</div>
                        
					</a>
				</li>
			</ul>
        
   <!--总计卡片视图-->
    <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				 <span>	总计：¥：{{getSum.toFixed(2)}}	</span>
                <button type="button" class="mui-btn">
					立刻购买
				</button>
			</div>
		</div>
	</div>



   </div>

</template>

<script>
    export default{
        data(){
            return{
                goodlist:[],
            }
        },
        methods:{
               getgoodList(){
                var url="http://127.0.0.1:3000/goodlist";
                 this.$http.get(url).then(result=>{
                  this.goodlist= result.body;
                 })
            }, 
          add(id){
             for(var item of this.goodlist){
                 if(item.id==id){
                 item.count++;
                  if(item.count>100)break;
                  }
             }
             },
         
          sub(id){
                 for(var item of this.goodlist){
                 if(item.id==id){
                      if(item.count>1)
                     item.count--;
                     break;
                  }
             }
          },
          remove(item){
              this.goodlist.splice(item, 1); 
          },


        },
        created(){
            this.getgoodList();
        },
        computed:{
            getSum:function(){
                var sum=0;
                for(var item of this.goodlist){
                    sum+=item.now * item.count;
                  }  
                return sum;
            }
        }

    }
</script>

<style scoped>
   .mui-media-body{
     margin-left:130px;
    }
    .mui-media-body .mui-icon{
      margin-left:320px;
      margin-top:50px;
    }
    .app-shopcar .mui-table-view .mui-media-object{
     max-width: 100px; 
     height: 100px; 
    }
  .mui-media-body .mui-ellipsis{
      margin-left:10px;
      color:red;
      font-size:18px;
      padding:5px 2px;
  }
  .title{
      padding-left:6px;
      color:#F55F8E;
  }
 .mui-card .mui-btn{
     background-color:#ccc;
     font-size:16px;
     color:#F55F8E;
     font-weight:bold;
  }
  .mui-card-content-inner span{
      font-size:18px;
      color:red;
      font-weight:bold;
      padding: 0 20px 0 50px;
  }
</style>