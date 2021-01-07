<template>
    <Header></Header>
    <div class="s_content">
        <div class="s_content_c">
            <h1 class="content-title">确认支付界面</h1>
        </div>
        <div class="center">
            <img class="good-img" src="../assets/images/pay-img.png" alt="">
            <div class="pay-context">
                <div class="name text">商品名称：华为mate30pro</div>
                <div class="number text">数量：1</div>
                <div class="price text">单价：200￥</div>
                <div class="phone text">联系电话：17816610888</div>
            </div>
        </div>
        <div class="pay-text">请选择支持方式</div>

        <div class="pay-way">
            <div class="pay1 pay-img"><img src="../assets/images/pay1.png" alt=""></div>
            <div class="pay2 pay-img"><img src="../assets/images/pay2.png" alt=""></div>
            <div class="pay3 pay-img"><img src="../assets/images/pay3.png" alt=""></div>
            <div class="pay4 pay-img"><img src="../assets/images/pay4.png" alt=""></div>
            <div class="pay5 pay-img"><img src="../assets/images/pay5.png" alt=""></div>
            <div class="pay6 pay-img"><img src="../assets/images/pay6.png" alt=""></div>
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
.s_content{
	width: 100%;
	background: #F2F2F2;
	padding-bottom: 60px;
}

.s_content .s_content_c{
    padding-top: 69px;
    background:#f0f3ef;
    padding-bottom: 15px;
    border-bottom: 1px rgb(97, 94, 94) dashed;
}

.content-title{
    padding-top: 20px;
    margin-left: 120px;
    font-size: 20px;
}
.center{
    display: flex;
    justify-content: center;
}

.good-img{
    margin-top: 40px;
    width: 200px;
    height: 200px;
}

.pay-context{
    margin-left: 80px;
    margin-top: 40px;
}
.text{
    font-size: 22px;
    font-weight: 500;
    margin: 15px 0;
    color: #ce810e;
}

.pay-text{
    padding-left: 100px;
    margin-top: 20px;
    font-size: 20px;
    padding-bottom: 20px;
    border-bottom: 1px rgb(97, 94, 94) dashed;
}

.pay-way{
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.pay-img{
    margin: 30px 50px;
}
</style>