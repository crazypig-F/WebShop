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
            <span>
                <input type= "checkbox" :checked=zhifubao @click=zhifubaoPay class="button-pay-img"/>
                <img class="pay-images" src="../assets/images/zhifubao.png" alt="">
            </span>
            <span>
                <input type= "checkbox" :checked=weixing @click=weixingPay class="button-pay-img"/>
                <img class="pay-images" src="../assets/images/weixing.png" alt=""/>
            </span>
        </div>

        <div class="buttoncontainer">
            <div class="paybutton">
                <div class="btn">
                    <button>取消订单</button>
                    <button @click=pay>确认支付</button>
                </div>
            </div>
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
            zhifubao: false,
            weixing: false,
            queryId: -1
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
        getOther() {
            axios.get("http://www.molycao.cn:8088/getuorder?uorderid=" + this.queryId).then(res => {
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
            if (!(this.weixing || this.zhifubao)) {
                alert("请选择至少一种支付方式")
            } else {
                var params = new URLSearchParams
                params.append("orderId", this.items.order.orderId)
                console.log(params)
                axios.post("http://www.molycao.cn:8088/deleteuorder", params).then(res => {
                    if (res.status == 200) {
                        alert("订单提交成功")
                        this.$router.go(-1)
                    } else {
                        alert("订单提交失败，请稍后再试")
                    }
                })
            }
        },
        cancle() {
            var params = new URLSearchParams
            params.append("orderId", this.items.order.orderId)
            console.log(params)
            axios.post("http://www.molycao.cn:8088/deleteuorder", params).then(res => {
                if (res.status == 200) {
                    this.$router.go(-1)
                }
            })
        },
        zhifubaoPay() {
            this.zhifubao = !this.zhifubao
            this.weixing = false
        },
        weixingPay() {
             this.weixing = !this.weixing
             this.zhifubao = false
        }
    },
    mounted() {
        if (null != this.$route.params.orderId) {
            this.queryId = this.$route.params.orderId
        }
        if (this.queryId == -1) {
            this.get()
        } else {
            this.getOther()
        }
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
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    height: 200px;
    text-align: center;
}

.pay-img{
    width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
}

.pay-images{
    width: 100px;
    height: 100px;
}
.buttoncontainer {
    text-align: center;
}
.buttoncontainer .paybutton {
    width: 300px;
    display:inline-block;
}

.buttoncontainer .paybutton .btn {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
}
</style>