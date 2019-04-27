<template>
    <div class="have-order">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="购物车" name="1">
                <div class="car-box">
                    <div class="title">菜品名</div>
                    <div class="price">￥12</div>
                    <div class="number"><van-stepper/></div>
                </div>
                <div class="order-box">
                    <div class="all-price">￥12</div>
                    <van-button type="primary" size="mini">下单</van-button>
                </div>
            </van-collapse-item>
            <van-collapse-item title="已下单" name="2">
                <div class="car-box">
                    <div class="title">菜品名</div>
                    <div class="price">￥12</div>
                    <div class="number">x 2</div>
                </div>
                <div class="order-box">
                    <div class="all-price">￥12</div>
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
                activeName: ""
            }
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