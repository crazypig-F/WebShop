<template>
    <!-- footer部分开始 -->
	<div class="footer">
		<div class="footer_c inner_c">
			<div class="footer_top">
				<div class="bir">
					<a href="#">
						<img src="../assets/images/logo.png" alt="">
					</a>
					<div class="info">
						青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
					</div>
				</div>
				<div class="about">
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
				</div>
				<div class="ewm">
					<p class="wx">
						<img src="../assets/images/img71.png" alt="">
						<span>微信公众号</span>
					</p>
					<p class="wb">
						<img src="../assets/images/img72.png" alt="">
						<span>微博公众号</span>
					</p>
				</div>
			</div>
		</div>
		<div class="footer_bar">
			<div class="footer_bar_c inner_c">
				<div class = "pay">
					<p class = "copy">
						2019 © youhaosuda.com
					</p>
					<p class = "ico">
						<a href="#">
							<img src="../assets/images/img81.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img82.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img83.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img84.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img85.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img86.png" alt="">
						</a>
						<a href="#">
							<img src="../assets/images/img87.png" alt="">
						</a>
					</p>
				</div>
				<div class="super">
					<a href="#" class = "pic1">
						
					</a>
					<a href="#" class = "pic2">
						
					</a>
					<a href="#" class = "pic3">
						
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* 公共类，设置页面的版心 */

.inner_c{
	/* 版心的宽度 */
	width: 1140px;
	/* 居中显示 */
	margin: 0 auto;
}
/* 设置a标签的下划线 */
a{
	text-decoration: none;
	color: inherit;
}
/* 设置遮罩，公共类 */
.mask{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.2);
	display: none;
}
.mask .btn{
	width: 138px;
	height: 52px;
	position: absolute;
	background: #C78A49;
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
/* 产品部分共类 */
.pub_pro li img{
	width: 100%;
}
.pub_pro li .cont{
	text-align: center;
	padding-top: 20px;
	font-size: 14px;
}
.pub_pro li .cont h3{
	line-height: 36px;
	color: #000;
	font-weight: bold;
}
.pub_pro li .cont span{
	color: #DB2E2E;
}
/* footer部分 */
.footer{
	background: #FAF8F8;
}
.footer .footer_c .footer_top{
	height: 158px;
	padding: 60px 0;
}
.footer .footer_c .footer_top .bir{
	width: 300px;
	float: left;
	margin-right: 67px;
}
.footer .footer_c .footer_top .bir .info{
	line-height: 16px;
	font-size: 12px;
	color: #636262;
}
.footer .footer_c .footer_top .bir .info:hover{
	color: #C78A49;
}
.footer .footer_c .footer_top .about{
	float: left;
	line-height: 30px;
}
.footer .footer_c .footer_top .about dl{
	margin-right: 90px;
	float: left;
}
.footer .footer_c .footer_top .about dt{
	font-size: 16px;
}
.footer .footer_c .footer_top .about dt:hover{
	color: #C78A49;
}
.footer .footer_c .footer_top .about dd{
	font-size: 14px;
}
.footer .footer_c .footer_top .about dd:hover{
	color: #C78A49;
}
.footer .footer_c .footer_top .ewm{
	float: right;
}
.footer .footer_c .footer_top .ewm .wx{
	float: left;
	margin-right: 17px;
	width: 140px;
	text-align: center;
	color: #000;
	font-size: 18px;
}
.footer .footer_c .footer_top .ewm .wb{
	float: left;
	width: 140px;
	text-align: center;
	color: #000;
	font-size: 18px;
}
.footer .footer_c .footer_top .ewm p:hover{
	color: #C78A49;
}
.footer .footer_bar{
	width: 100%;
	height: 105px;
	border-top: 1px solid #E6E6E6;
}
.footer .footer_bar .footer_bar_c{
	padding-top: 30px;
}
.footer .footer_bar .footer_bar_c .pay{
	float: left;
}
.footer .footer_bar .footer_bar_c .pay .copy{
	color: #919191;
	font-size: 12px;
}
.footer .footer_bar .footer_bar_c .pay .ico{
	height: 25px;
	margin-top: 18px;
}
.footer .footer_bar .footer_bar_c .pay .ico a{
	display: inline-block;
	width: 25px;
	height: 25px;
	background: purple;
	margin-right: 10px;
}
.footer .footer_bar .footer_bar_c .pay .ico a img{
	width: 100%;
}
.footer .footer_bar .footer_bar_c .super{
	float: right;
	padding-top: 10px;
}
.footer .footer_bar .footer_bar_c .super a{
	display: inline-block;
	width: 95px;
	height: 36px;
	background: url("../assets/images/img881.png");
	margin-left: 10px;
}
.footer .footer_bar .footer_bar_c .super a.pic2{
	background: url("../assets/images/img891.png");
}
.footer .footer_bar .footer_bar_c .super a.pic3{
	background: url("../assets/images/img901.png");
}
.footer .footer_bar .footer_bar_c .super a.pic1:hover{
	background: url("../assets/images/img88.png");
}
.footer .footer_bar .footer_bar_c .super a.pic2:hover{
	background: url("../assets/images/img89.png");
}
.footer .footer_bar .footer_bar_c .super a.pic3:hover{
	background: url("../assets/images/img90.png");
}
</style>