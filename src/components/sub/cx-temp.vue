<template>

   <div id="item1" class="slider-item ">
        <!--小图左右滑动-->
            <div class="row-scroll">
                <ul>
                    <li v-for="item in aalist" :key="item.id"> 
                    <img :src="item.img_url">
                    <p>{{item.title}} </p>
                    <p> ¥:<span>{{item.new}} </span> <del>¥:{{item.old}}</del>    </p>
                    </li>
                </ul>
            </div> 
            <!--循环遍历-->
            <div class="col-scroll">
            <ul class="table-view">
                <li class="able-view-cell" v-for="item in goodslist" :key="item.id">
                    <img :src="item.img_url">	
                </li>
            </ul>
            </div>
    </div>
   
</template>

<script>
    export default{
        data(){
            return{	
                goodslist:[ ],
                aalist:[], 
                }
        },
        methods:{
              getgoodList(){
        var url="http://127.0.0.1:3000/goodslist";
         this.$http.get(url).then(result=>{
        
           this.goodslist= result.body;
         })
		  },
       getaaList(){
        var url="http://127.0.0.1:3000/aalist";
         this.$http.get(url).then(result=>{
           this.aalist= result.body;
         })
		  },

        },
        created(){
           this.getgoodList();
           this.getaaList();
        }

    }
</script>

<style scoped>
    #item1 .row-scroll{
  width:100%;
   overflow:auto;
  
}
#item1 .row-scroll::-webkit-scrollbar{
  display: none;
}
#item1 .row-scroll ul{
  width:1100px;
  list-style:none;
  padding:0;
  display:flex;
  justify-content:space-aronud;
}
#item1 .row-scroll ul li{
  width:180px ;
  height:160px;
  padding:0 5px;
}
#item1 .row-scroll ul li img{
  width:100%;
}
#item1 .row-scroll ul li p{
  font-size:14px;
}
#item1 .row-scroll ul li p span{
  font-size:16px;
  font-weight:bold;
  color:black;
}
#item1 .row-scroll ul li p del{
  font-size:12px;
}
#item1 .col-scroll .table-view{
  list-style:none;
   padding:0;
} 
#item1 .col-scroll .table-view li {
  width:100%;
  height:160px;
  margin:5px 5px;
}
#item1 .col-scroll .table-view li img{
  width:100%;
  height:100%;
}
</style>