<template>
    <!-- banner部分开始 -->
	<div class="banner">
		<ul class="pic">
			<li class = "cur"><a href="#"><img src="../assets/images/img11.png" alt=""></a></li>
			<li><a href="#"><img src="../assets/images/img12.png" alt=""></a></li>
			<li><a href="#"><img src="../assets/images/img13.png" alt=""></a></li>
		</ul>
		<ol class = "circle">
			<li class = "cur"></li>
			<li></li>
			<li></li>
		</ol>
	</div>
	<!-- banner部分结束 -->
</template>

<style scoped>
/* banner部分 */
.banner{
	width: 100%;
	padding-top: 69px;
	position: relative;
	height: 600px;
}
.banner .pic li{
	width: 100%;
	position: absolute;
	display: none;

}
.banner .pic li img{
	width: 100%;
}
.banner .pic li.cur{
	display: block;
}
.banner .circle{
	list-style: none;
	position: absolute;
	bottom: 64px;
	width: 90px;
	height: 4px;
	left: 50%;
	margin-left: -45px;
}
.banner .circle li{
	width: 20px;
	height: 4px;
	background: #fff;
	float: left;
	margin: 0 5px;
}
.banner .circle li.cur{
	background:#C78A49;
}
</style>