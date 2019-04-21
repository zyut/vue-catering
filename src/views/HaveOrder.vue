<template>
    <div class="have-order">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="购物车" name="1">
                <div>提供多样店铺模板，快速搭建网上商城</div>
                <div>提供多样店铺模板，快速搭建网上商城</div>
            </van-collapse-item>
            <van-collapse-item title="已下单" name="2">
                网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
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

<style scoped>

</style>