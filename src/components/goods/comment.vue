<template>
    <div class="content3">
             <ul class="pj-table" >
             <li> 
                <span>商品评价<span class="little">（23） </span> </span>  
                 <span  class="little"> <b class="red">91.3% </b>  好评<span class="pad"> > </span> </span>
             </li> 
             <li v-for="item in pjlist" :key="item.id">
                <div class="pj-list">
                   <p>
                     <img :src="item.img_url">
                     <b class="red">{{item.title}}</b>
                   </p>
                   <p> <span>{{item.phone}}</span>{{item.ctime}}</p>
                 </div>
                 <div class="pj-list-1">{{item.text}}</div>
             </li>
           </ul>
         </div>
</template>
<script>
    export default{
        data(){
            return{
              pjlist:[],
            }
        },
        methods:{
             getpjList(){
            var url="http://127.0.0.1:3000/pjlist";
            this.$http.get(url).then(result=>{
            this.pjlist= result.body;
         })   

        },
        },
        created() {
            this.getpjList();
        },
        


    }
</script>
<style scoped>
   .content3 .pj-table{
        list-style: none;
        margin:0;
        padding:0;
   }
   .content3 .pj-table li{
      border-top:1px solid #C0C0C0;

   }
   .content3 .pj-table li:nth-child(1){
      display: flex;
      justify-content: space-between;
      padding:10px 5px;
   }
   .content3 .pj-table li:last-child{
       border-bottom: 1px solid #C0C0C0;
   }
   .little{
        font-size: 14px;
   }
   .red{
       color:red;
       font-size: 14px;
   }

   .pad{
       margin:10px;
   }
   .pj-list p:first-child{
         display: flex;
        justify-content:start;
        text-align: center;
        line-height: 30px;
   }
   .pj-list p img{
       width:30px;
       height:30px;
   }
   .pj-list p span{
       padding:0 10px;
       color:black;
   }

   .pj-list{
        display: flex;
        justify-content: space-between;
        padding:0 5px;
   }
   .pj-list-1{
       color:gray;
       font-size: 12px;

   }
</style>
