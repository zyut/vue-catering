<template>
    <div class="have-order">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="购物车" name="1">
                <div class="car-box"
                     v-for="(item, index) in carList"
                     :key="index">
                    <div class="title">{{item.name}} ({{item.spec_name}})</div>
                    <div class="price">￥{{item.price}}</div>
                    <div class="number">
                        <van-stepper v-model="item.number"/>
                    </div>
                </div>
                <div class="order-box">
                    <div class="all-price">￥{{carAllPrice}}</div>
                    <van-button type="primary" size="mini">下单</van-button>
                </div>
            </van-collapse-item>
            <van-collapse-item title="已下单" name="2">
                <div class="car-box"
                     v-for="(item, index) in orderList"
                     :key="index">
                    <div class="title">{{item.name}} ({{item.spec_name}})</div>
                    <div class="price">￥{{item.price}}</div>
                    <div class="number">x {{item.number}}</div>
                </div>
                <div class="order-box">
                    <div class="all-price">￥{{orderAllPrice}}</div>
                    <van-button type="primary" size="mini">结账</van-button>
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    export default {
        name: "HaveOrder",
        data(){
            return{
                activeName: "",
                carList: [
                    {
                        "id": "sfasdf",
                        "class_id": "5cbf00dc8e1dc737559dcf84",
                        "menu_id": "5cbf03288e1dc737559dcf8b",
                        "img": require("../assets/logo.png"),
                        "name": "红烧猪蹄",
                        "spec_name": "麻辣",
                        "price": 58,
                        "number": 2
                    },
                    {
                        "id": "sfasdf",
                        "class_id": "5cbf00dc8e1dc737559dcf84",
                        "menu_id": "5cbf04f18e1dc737559dcf8c",
                        "img": require("../assets/logo.png"),
                        "name": "红烧猪蹄",
                        "spec_name": "草鱼",
                        "price": 78,
                        "number": 1
                    }
                ],
                orderList: [
                    {
                        "id": "sfasdf",
                        "class_id": "5cbf00dc8e1dc737559dcf84",
                        "menu_id": "5cbf03288e1dc737559dcf8b",
                        "img": require("../assets/logo.png"),
                        "name": "红烧猪蹄",
                        "spec_name": "麻辣",
                        "price": 58,
                        "number": 1
                    }
                ],
                carAllPrice: 0,
                orderAllPrice: 0
            }
        },
        mounted() {
            this.carList.forEach(item => {
                this.carAllPrice = this.carAllPrice + item.price;
            });
            this.orderList.forEach(item => {
                this.orderAllPrice = this.orderAllPrice + item.price;
            })
        }
    }
</script>

<style scoped lang="less">
.have-order{
    .car-box{
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        border-width: 0 0 1px;
        border-style: solid;
        border-color: #eee;
        .title{
            width: calc(80% - 95px);
        }
        .price{
            width: 20%;
            color: #f44;
        }
        .number{
            width: 95px;
            text-align: right;
        }
    }
    .order-box{
        display: flex;
        text-align: right;
        height: 2.2rem;
        line-height: 3rem;
        justify-content: flex-end;
        align-items: flex-end;
        .all-price{
            display: inline-block;
            height: 22px;
            line-height: 22px;
            color: #07c160;
            font-size: 16px;
            margin-right: 20px;
        }
    }
}
</style>