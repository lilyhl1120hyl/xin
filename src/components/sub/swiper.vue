<template>
    <div class="app-swiper">
       <!--轮播图-->
      <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">  <!--VUE循环对数据排序操作，提升效率使不重复属性-->
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
      
   </div>
</template>

<script>
    export default{
        data(){
            return{list:[ ] ,}
        },
        methods:{
               getImage(){
         //发送ajax请求，并且获取图片列表并且显示
         var url="http://127.0.0.1:3000/imagelist";
         this.$http.get(url).then(result=>{
          
           this.list= result.body;
         })
      },

        },
        created(){
            this.getImage();
        }

    }
</script>

<style scoped>
     /*图片轮播设置高度*/
  .app-swiper .mint-swipe{
    height:120px;
  }
  .app-swiper .mint-swipe img{
    width:100%;
    height:100%;
  }
 .app-swiper{
   padding:0;
 }
</style>