<template>
    <!-- liangpin部分开始 -->
	<div class="liangpin">
		<div class="liangpin_c inner_c">
			<div class="title">
				<h2><a href="#">良品体验</a></h2>
				<p class="info">用户反馈，是我们改进的目标</p>
			</div>
			<div class="lp_pro">
				<ul>
					<li>
						<a href="#" title="">
							<img src="../assets/images/img61.png" alt="">
						</a>
						<div class="cont">
							<div class="tit">
								<h4>天草陶石咖啡杯套装</h4>
								<span>￥299</span>
							</div>
							<p class = "info">
								使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化
							</p>
							<p class="time">
								<span>alice</span>
								<span>2016-12-16</span>
								<span>09:59</span>
							</p>
						</div>
					</li>
					<li>
						<a href="#" title="">
							<img src="../assets/images/img62.png" alt="">
						</a>
						<div class="cont">
							<div class="tit">
								<h4>天草陶石咖啡杯套装</h4>
								<span>￥299</span>
							</div>
							<p class = "info">
								使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化
							</p>
							<p class="time">
								<span>alice</span>
								<span>2016-12-16</span>
								<span>09:59</span>
							</p>
						</div>
					</li>
					<li>
						<a href="#" title="">
							<img src="../assets/images/img63.png" alt="">
						</a>
						<div class="cont">
							<div class="tit">
								<h4>天草陶石咖啡杯套装</h4>
								<span>￥299</span>
							</div>
							<p class = "info">
								使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化
							</p>
							<p class="time">
								<span>alice</span>
								<span>2016-12-16</span>
								<span>09:59</span>
							</p>
						</div>
					</li>
					<li>
						<a href="#" title="">
							<img src="../assets/images/img64.png" alt="">
						</a>
						<div class="cont">
							<div class="tit">
								<h4>天草陶石咖啡杯套装</h4>
								<span>￥299</span>
							</div>
							<p class = "info">
								使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化
							</p>
							<p class="time">
								<span>alice</span>
								<span>2016-12-16</span>
								<span>09:59</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- liangpin部分结束 -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* 公共类，设置页面的版心 */

.inner_c {
  /* 版心的宽度 */
  width: 1140px;
  /* 居中显示 */
  margin: 0 auto;
}
/* 设置a标签的下划线 */
a {
  text-decoration: none;
  color: inherit;
}
/* 设置遮罩，公共类 */
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}
.mask .btn {
  width: 138px;
  height: 52px;
  position: absolute;
  background: #c78a49;
  color: #fff;
  text-align: center;
  line-height: 52px;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  margin-top: -26px;
  margin-left: -69px;
}
/* qingzhu_content中标题部分的公共类 */
.title{
	text-align: center;
	height: 92px;
	padding-top: 40px;
}
.title h2{
	font-size:23px;
	font-weight: bold;
	color: #000000;
	line-height: 54px;

}
.title .info{
	color: #999999;
	font-size: 16px;
}
/* liangpin部分 */
.liangpin{
	width: 100%;
	height: 613px;
	background: #F4F0EA;
}
.liangpin .lp_pro{
	height: 432px;
}
.liangpin .lp_pro ul li{
	width: 276px;
	height: 432px;
	background: #fff;
	float: left;
	margin-right: 9px;
	overflow: hidden;
}
.liangpin .lp_pro ul li a img{
	width: 100%;
	transition: all 1s ease 0s;
}
.liangpin .lp_pro ul li a img:hover{
	transform: scale(1.2);
	transition: all 2s ease 0s;
}
.liangpin .lp_pro ul li .cont{
	width: 236px;
	height: 144px;
	background: #fff;
	padding: 10px 15px;
	margin: 0 auto;
	position: relative;
	top: -15px;
}
.liangpin .lp_pro ul li .cont .tit{
	line-height: 41px;
	height: 47px;
}
.liangpin .lp_pro ul li .cont .tit h4{
	float: left;
	font-size: 14px;
	font-weight: bold;
	color: #333333;
}
.liangpin .lp_pro ul li .cont .tit span{
	float: right;
	font-size: 14px;
	color: #C78A49;
}
.liangpin .lp_pro ul li .cont .info{
	font-size: 12px;
	line-height: 15px;
	color: #4D4D4D;
	/* 下面的属性是设置文字省略号的 */
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}
.liangpin .lp_pro ul li .cont .time{
	margin-top: 15px;
	font-size: 12px;
	color: #777777;
}
</style>