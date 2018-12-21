<template>
 <div class="app-container">
   <!--顶部导航条 1：-->
      <div class="header" >
            <div class="h-font">乐蜂</div>
            <div class="h-input">
					<input  class="input-clear" placeholder="韩束集团">
                    <span class="mui-icon mui-icon-search"></span>
			</div>
            
      </div>
 <!--2,容器显示不同的组件-->
    <router-view>
    
    </router-view>
    
 <!--3，底部导航栏-->
 <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item mui-active" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">特卖</span>
			</router-link>
			<router-link to="/select" class="mui-tab-item" >
				<span class="mui-icon mui-icon-settings"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			
			<router-link to="/shop" class="mui-tab-item" >
				<span class="mui-icon mui-icon-locked"></span>
				<span class="mui-tab-label">商城</span>
			</router-link>
            <router-link to="/shopcar" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link to="/my" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的蜂巢</span>
			</router-link>
		</nav>
 </div>
</template>

<style>
  .app-container{
      padding-bottom:50px;
      overflow-x:hidden;
  }
.header{
    display:flex;
    justify-content:space-around;
    
}
.header .h-font{
    font:normal bold 18px "宋体";
    color:red;
    line-height:34px;
    text-align:center;
}
.h-input{
    position:relative;
   
}
.h-input input{
     height:30px;
     width:220px;
     line-height:30px;
     font-size:12px;
     padding-left:25px;
     margin-top:5px;
     border:1px solid #C0C0C0;
     border-radius:6px;

}
.mui-icon{
    position:absolute;
    top:6px;
    left:3px;
}
.mui-bar .mui-icon{
    margin:0 auto;
}

</style>
