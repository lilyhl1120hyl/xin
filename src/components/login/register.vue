<template>
   <div class="app-register">
       <header class="mui-bar mui-bar-nav">
			<router-link  to="/login" > 
                 <span class="mui-icon mui-icon-undo"></span>
            </router-link>
			<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入手机账号" v-model="pnum">
                    <button class="btn" @click="checkNum()">获取验证码</button>
				</div>
                <div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入手机验证码" v-model="checknum">
				</div>
				<div class="mui-input-row">
					<input  type="password" class="mui-input-clear mui-input" placeholder="请输入密码:6-12位字母，数字或符号" v-model="pwd">
				</div>
		
			
			</form>
			<div class="mui-content-padded">
				<button class="mui-btn mui-btn-block" @click="getMsg()">注册</button>
			</div>
			<div class="mui-content-padded">
				<p>注册即表示已接受 <a href="#">乐蜂用户协议</a></p>
			</div>
		</div>
   </div>
</template>

<script>
    export default{
        data(){
            return{
                pnum:"",
                checknum:"",
                pwd:"",
                checkarr:""
            }  
        },
        methods:{
            checkNum(){
                var checkarr="";
                for(var i=0;i<6;i++){
                    var seed=parseInt(Math.random()*9);
                    checkarr=checkarr+seed;
                   
                }
                  this.checkarr=checkarr;
                  console.log(this.checkarr);
            },
             getMsg(){
                 var pnum=this.pnum;
                 var checknum=this.checknum;
                 var pwd=this.pwd;
                 var checkarr=this.checkarr;
                 var reg1=/^[1][3,4,5,7,8][0-9]{9}$/;
                 var reg2=/^\w{6,12}$/;
                 if (!reg1.test(pnum)) {
                   this.$toast("手机号不正确")
                   return;
                 }else if (!reg2.test(pwd)) {
                   this.$toast("密码不正确")
                   return;
                 } else if(checknum!==checkarr){
                     this.$toast("验证码不正确")
                     return;
                 }else{
                    this.$http.get("http://127.0.0.1:3000/getMsg?pnum="+pnum+"&pwd="+pwd);
                    this.$router.push("/my"); 
                    
                 }
             }

        },
    
    created(){
          this.getMsg();
       },
     components:{
        
     }

    }
</script>

<style scoped>
 .app-goodsdetail .active{
      position:absolute;
      top:10px;
      right:10px;
  }
.mui-input-row label~input,
.mui-input-row label~select,
.mui-input-row label~textarea {
    width: 78%;
}
.btn{
    width: 100px;
    border:1px solid gray;
    border-radius: 10px;
    position: absolute;
    right: 10px;
    top:1px;
}
.mui-content-padded {
    margin-top: 25px;
}
.mui-btn {
    padding: 10px;
    background-color: #EFDDDD;
}
.mui-content-padded p{
    margin-left:40px;
}			
.mui-content-padded p a{
    color:#FDB64B
}

</style>