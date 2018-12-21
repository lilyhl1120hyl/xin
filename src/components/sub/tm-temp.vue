<template>
    <div id="item2">
        <div class="title2">
           <p> 品牌专区 </p>
        </div>
        <ul>
            <li v-for="item in tmlist" :key="item.id">
            <img :src="item.img_url">
            <p>11.11特卖品牌</p>
            </li>
        </ul>
    </div>
   
</template>

<script>
    export default{
        data(){
            return{	
                tmlist:[ ],
                }
        },
        methods:{
              gettmList(){
         var url="http://127.0.0.1:3000/tmlist";
         this.$http.get(url).then(result=>{
           this.tmlist= result.body;
         })
		  },

        },
        created(){  
          this.gettmList(); 
        }

    }
</script>

<style scoped>
  #item2 ul{
   list-style:none;
   padding:0;
}
#item2 ul li{
  width:100%;
  height:200px;
  padding:0px 5px;
}
#item2 ul li img{
  width:100%;
  height:80%;
}
#item2 ul li p{
  background:#ccc;
  font-size:18px;
  line-height:30px;
  color:red;
}
#item2 .title2 p {
  font-size:24px;
  line-height:30px;
  font-weight:400;
  color:red;
  text-align: center;
}
</style>