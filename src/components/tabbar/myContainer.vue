<template>
    <div class="app-my">
      <!--头部信息-->
        <!--登录前页面-->
         <header class="header" v-if="show()" >
           <div class="my-left">
              <img src="../../img/mm1.png">
           </div>
           <div class="my-center">
              <router-link to="/login" class="logreg">登录/注册</router-link>
           </div>
           <div class="my-right">
             <img src="../../img/m3.png">
           </div>
         </header>
         <!--登陆后页面-->
         <header class="header" v-else>
           <div class="my-left">
             <img src="../../img/m1.png">
           </div>
           <div class="my-center">
              <p>{{uname}}</p>
              <img src="../../img/m2.png">
           </div>
           <div class="my-right">
             <img src="../../img/m3.png">
           </div>
         </header>


         <!--列表1-->
         <ul class="mui-table-view marp">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right cl-list">
					  我的订单 <span>	全部订单 </span>
					</a>
				</li>
				<li class="mui-table-view-cell mylist">
                   <div v-for="item in mylist" :key="item.id" class="mylisy-item">
                   <img :src="item.img_url">
                   <p>{{item.title}} </p>
                   </div>
                </li>
                <li class="mui-table-view-cell mylist1">
                  <a> <img src="../../img/m8.png"> </a>
                </li>
		</ul>
             <!--列表2-->
            <ul class="mui-table-view mylist2">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m9.png">
                        <span>我的优惠券</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m10.png">
                        <span>我的花粉</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m11.png">
                        <span>我的银行卡</span>
					</a>
				</li>
			</ul>

             <!--列表3-->
             <div class="content-inner">
             <ul class="mui-table-view mylist3">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m12.png">
                        <span>我的收藏</span>
					</a>
				</li>
				<li class="mui-table-view-cell border-bottom">
					<a class="mui-navigate-right">
						<img src="../../img/m13.png">
                        <span>浏览记录</span>
					</a>
				</li>
				
			</ul>
   	       </div>
             <!--列表4-->
             <ul class="mui-table-view mylist4">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m14.png">
                        <span>意见反馈</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m15.png">
                        <span>联系客服</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<img src="../../img/m16.png">
                        <span>关于乐蜂</span>
					</a>
				</li>
			</ul>
    
     </div>
</template>
<script>
    export default{
        data(){
            return{
              mylist:[],
              uname:this.$route.query.unum
            }
        },
        methods:{
            getmyList(){
                var url="http://127.0.0.1:3000/mylist";
                this.$http.get(url).then(result=>{
                     this.mylist=result.body;
                })
            },
            show(){
                
                return this.uname==undefined
            }
        },
        created(){
             this.getmyList();
             this.show();
        }
    }
</script>

<style scoped>
 .header{
      width:100%;
      height:100px;
      background-image:url('../../img/mm.png');
      background-repeat:no-repeat;
      display:flex;
      justify-content:space-around;
      position: absolute;
      z-index:100;
      top:0;
  }
  .my-center .logreg{
      color:red;
      display: block;
      margin-top:30px;
    }
  .marp{
      margin-top:60px;
  }
 .my-left img{
     width:80px;
     height:80px;
     padding-top:10px;
 }
 .my-center p{
     font-size:24px;
     padding-top:20px;
     color:black;
 }
  .my-center img{
     width:100px;
     height:30px;
 }
  .my-right img{
     width:25px;
     height:25px;
     margin-left:60px;
 }
.mylist{
    height:90px;
    display:flex;
    justify-content:space-around;
}
.mylisy-item{
    width:50px;
    height:50px;
}

.mylisy-item img{
    width:100%;
}
.cl-list span{
    color:gray;
    margin-left:180px;
}
.mylist1 a img{
    width:100%;
}

.mylist2 li a img,.mylist3 li a img, .mylist4 li a img{
    width:40px;
    height:40px;
    vertical-align:middle;
    margin-right:10px;
}
.mylist2 li a span,.mylist3 li a span, .mylist4 li a span{
  font-size:14px;
  vertical-align:middle;
  
}
.content-inner{
    margin:15px 0 ;
    
}
.border-bottom{
    border-bottom:1px solid #DEDEE2;
}
</style>