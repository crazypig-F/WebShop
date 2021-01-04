<template>
    <Header></Header>
    <div class="login">
		<div class="main">
			<h2>注册</h2>
			<form action="#">
				<!-- 用户名 type属性值是text指的是文本框-->
				<input type="text" placeholder="手机/邮箱/用户名" class = "in1" >
				<!-- 密码 type属性值是password指的是密码框-->
				<input type="password" placeholder="设置密码">
				<input type="password" placeholder="确认密码">
				<!-- 注册和忘记密码 -->
				<p class = "zc">
					已有账号？请<a href="#">直接登录</a>
				</p>
				<!-- input的type值如果是button，指的是按钮 -->
				<input type="button" value = "注册" class = "btn_d">
				<input type="button" value = "用短信验证码注册" class = "btn_p">
			</form>
			<div class = "acc">
				<h3>社交账号登录</h3>
				<p>
					<a href="#" class = "a1"></a>
					<a href="#" class = "a2"></a>
					<a href="#" class = "a3"></a>
					<a href="#" class = "a4"></a>
					<a href="#" class = "a5"></a>
					<a href="#" class = "a6"></a>
				</p>
			</div>
		</div>
	</div>
    <Footer></Footer>
</template>

<script>
import Header from "./header"
import Footer from "./footer"
export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>

.login{
	background: #F2F2F2;
	padding: 120px;
	padding-top: 190px;
}
.login .main{
	width: 322px;
	margin: 0 auto;
	padding: 30px 40px;
	background: #fff;
}
.login .main h2{
	height: 40px;
}
.login .main input{
	width: calc(100% - 15px);
	height: 38px;
	outline: none;
	padding-left: 15px;
	border: 1px solid #DCDFE6;
	border-radius: 5px;
	margin-bottom: 22px;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #C0C4CC;
	font-size: 14px;
}
.login .main p{
	font-size: 12px;
	color: #4685EC;
	height: 30px;
}
.login .main p .l{
	float: left;
}
.login .main p .r{
	float: right;
}
.login .main .btn_d{
	width: 100%;
	padding-left: 0;
	background: #4685EC;
	color: #fff;
	margin-bottom: 10px;
}
.login .main .btn_d:hover{
	opacity: 0.9;
}
.login .main .btn_p{
	background: #fff;
	width: 100%;
	padding-left: 0;
	border-color: #4685EC;
	color: #4685EC;
}
.login .main .btn_p:hover{
	opacity: 0.9;
}
.login .main .acc{
	height: 56px;
	border-top: 1px solid #ddd;
	padding-top: 20px;
	position: relative;
}
.login .main .acc h3{
	position: absolute;
	top: -10px;
	left: 50%;
	/* CSS3属性 */
	transform: translateX(-50%);
	background: #fff;
	padding: 0 5px;
}
.login .main .acc p{
	padding-left: 10px;
}
.login .main .acc a{
	display: inline-block;
	width: 34px;
	height: 33px;
	background: url(../assets/images/qq.png);
	margin: 0 6px;
}
.login .main .acc a.a1:hover{
	background: url(../assets/images/qq2.png);
}
.login .main .acc a.a2{
	background: url(../assets/images/wb.png);
}
.login .main .acc a.a2:hover{
	background: url(../assets/images/wb2.png);
}
.login .main .acc a.a3{
	background: url(../assets/images/wx.png);
}
.login .main .acc a.a3:hover{
	background: url(../assets/images/wx2.png);
}
.login .main .acc a.a4{
	background: url(../assets/images/wy.png);
}
.login .main .acc a.a4:hover{
	background: url(../assets/images/wy2.png);
}
.login .main .acc a.a5{
	background: url(../assets/images/rr.png);
}
.login .main .acc a.a5:hover{
	background: url(../assets/images/rr2.png);
}
.login .main .acc a.a6{
	background: url(../assets/images/db.png);
}
.login .main .acc a.a6:hover{
	background: url(../assets/images/db2.png);
}
/* 注册部分的代码 */
.login .main .zc{
	color: #555;
}
.login .main .zc a{
	color: #4685EC;
}
</style>