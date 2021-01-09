<template>
    <Header></Header>
    <div class="s_content">
        <div class="s_content_c">
            <h1 class="content-title">确认支付界面</h1>
        </div>
        <div class="center">
            <ul>
                <li v-for="item in items.orderitems" :key="item.id">
                    <img class="good-img" :src=item.book.bookPoster alt="">
                    <span class="pay-context">
                        <div class="name text">商品名称：{{item.book.bookName}}</div>
                        <div class="number text">数量：{{item.quantity}}</div>
                        <div class="price text">原价：￥{{item.book.bookPrice * item.quantity}}</div>
                        <div class="phone text">实付：￥{{item.book.bookPrice * item.quantity * item.book.bookDiscount}}</div>
                    </span>
                </li>
            </ul>
        </div>
        <div class="pay-text">总计：￥{{totalPrice}} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 优惠：￥{{totalDiscount}}</div>
        <div class="pay-text">请选择支持方式</div>

        <div class="pay-way">
            <div class="pay1 pay-img" @click=pay><img src="../assets/images/pay1.png" alt=""></div>
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
import axios from 'axios'
export default {
    components:{
        Header,
        Footer
    },
    data: function() {
        return {
            items : {},
            totalPrice : 0,
            totalDiscount : 0,
            title : "确认支付",
            show : true
        }
    },
    methods : {
        get() {
            axios.get("http://www.molycao.cn:8088/getlatestuorder?userid=1").then(res => {
                if (res.status == 200) {
                    this.items = res.data.extend
                    this.getTotalPrice()
                }
            })
        },
        getTotalPrice() {
            this.items.orderitems.forEach((item) => {
                this.totalPrice += item.book.bookPrice * item.quantity * item.book.bookDiscount
                this.totalDiscount += item.book.bookPrice * item.quantity * (1 - item.book.bookDiscount)
            })
            this.totalPrice = Math.round(this.totalPrice)
            this.totalDiscount = Math.round(this.totalDiscount)
        },
        pay() {

        }
    },
    mounted() {
        this.get()
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

.center ul li {
    display: flex;
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