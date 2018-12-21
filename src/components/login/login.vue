<template>
   <div class="app-login">
       <header class="mui-bar mui-bar-nav">
            <span class="m-icon">×</span>
            <router-link to="/register">
              <span class="m-title">注册</span>
            </router-link>
			
		</header>
		<div class="mui-content">
            <div class="logo-img">
                  <img src="../../img/logo.png" alt="">
            </div>
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="unum">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="upwd">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button  type="button" class="mui-btn mui-btn-block" @click="checkForm()">登录</button>
				<div class="link-area"> 
                    <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="ex-login">
                <div class="fg-line">
                    <span><hr></span> 
                    <span>使用第三方账号登录</span> 
                    <span><hr></span>
                </div> 
                <div class="fg-img">
                    <a href="#"> <img src="../../img/qq.png" alt="">  </a>
                    <a href="#"> <img src="../../img/weixin.png" alt="">  </a>
                    <a href="#">  <img src="../../img/sinaweibo.png" alt=""> </a> 
                </div> 
			</div>
		</div>
   </div>
</template>

<script>
    export default{
        data(){
            return{
                form:[],
                unum:"",
                upwd:""
            }  
        },
        methods:{
           getLoginform(){
               var url="http://127.0.0.1:3000/loginform";
               this.$http.get(url).then(result=>{
                        this.form=result.body;  
               })
           },
           checkForm(){
               var unum=this.unum;
               var upwd=this.upwd;
               var form=this.form;
               for(var i=0;i<form.length;i++){
                  if(unum==form[i].pnum && upwd==form[i].pwd){
                     this.$router.push("/my?unum="+unum); 
                     return; 
                  }else if(unum==form[i].pnum){
                      this.$toast("登录密码有误");  
                  }else if(upwd==form[i].pwd){
                      this.$toast("登录手机不存在"); 
                  }else{
                      this.$toast("手机号和密码不正确"); 
                  }

               }
           }
           
        },
    
    created(){
          this.getLoginform();
          
       },

    }
</script>

<style scoped>
 .app-login .mui-bar-nav{
     display: flex;
     justify-content: space-between;
     align-items:center;
 }
 .app-login .mui-bar-nav .m-icon{
     width:30px;
     height:30px;
     font-size:24px;
     text-align: center;
     line-height: 30px;
 }
 .app-login .mui-bar-nav .m-title{
     color:#E41B4F; 
 }
 .mui-content .logo-img{
     width:100px;
     height:100px;
     margin: 30px auto;
 }
 .mui-content .logo-img img{
     width:100%;
 }

.mui-input-group {
    margin-top: 10px;
}

.mui-input-group:first-child {
    margin-top: 20px;
}

.mui-input-group label {
    width: 22%;
}

.mui-input-row label~input,
.mui-input-row label~select,
.mui-input-row label~textarea {
    width: 78%;
}

.mui-content-padded {
    margin-top: 25px;
}

.mui-btn {
    padding: 10px;
    background-color: #EFDDDD;
}

.link-area {
    display: block;
    margin-top: 25px;
    text-align: end;
    
}
.link-area a{
      color:#E41B4F;  
      font-size: 12px; 
}
.fg-line span hr{
    width:100px;
}
.fg-line span:nth-child(2){
    padding:0 5px;
}
.fg-line{
    margin-top:30px;
    display: flex;
    justify-content: center;
     align-items:center;
}
.fg-img{
    margin-top:30px;
    display: flex;
    justify-content:space-around;
    align-items:center;
}
.fg-img a img{
    width:60px;
    height:60px;
}

</style>
