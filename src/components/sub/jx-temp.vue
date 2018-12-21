<template>

    <div id="item3">
        <div class="title3">
        <p> 每日精选 </p>
        </div>
        <ul>
            <li v-for="item in jxlist" :key="item.id">
            <img :src="item.img_url" @click="togoods(item.id,item.title,item.detail,item.now,item.old,item.img_url)">
            <p  class="item-tl">
            <span class="item-t">{{item.title}}</span>
                <span>{{item.detail}}</span>
            </p>
            <p class="cart">
            <span>¥:{{item.now}}</span>
                <del>¥:{{item.old}}</del>
                <img src="../../img/cart.png">
            </p>
            </li>
        </ul>
    </div>

</template>

<script>
    export default{
        data(){
            return{	
                 jxlist:[],
                }
        },
        methods:{
            getjxList(){
        var url="http://127.0.0.1:3000/jxlist";
         this.$http.get(url).then(result=>{
           this.jxlist= result.body;
         })
		  },
           togoods(id,title,detail,now,old,img_url){
               this.$router.push("/detail?id="+id+"&title="+title+"&detail="+detail+"&now="+now+"&old="+old+"&img_url="+img_url)
               
           },
        },
        created(){
           this.getjxList();
        },
       

    }
</script>

<style scoped>
#item3 ul{
   list-style:none;
   padding:0;
}
#item3 ul li img{
  width:100%;
  height:80%;
}
#item3 .cart span{
  background:#ccc;
  font-size:18px;
  line-height:30px;
  color:red;
}
#item3 .title3 p{
  font-size:24px;
  line-height:30px;
  font-weight:400;
  color:red;
  text-align: center;
}
#item3 ul li{
  width:49%;
  height:300px;
  padding:10px 5px;

}
#item3 ul li img{
    transition:all 0.6s;
}
#item3 ul{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
}

#item3 .cart img{
  width:30px;
  height:30px;
}
#item3 .item-t{
  font-size:16px;
  font-weight:400;
  color:black;
  padding-right:3px;
}
#item3 .item-tl{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  display:block;
  width:168px;
  margin:0;
}
</style>