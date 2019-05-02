<template>
    <div class="admin">
        <div class="admin-header">
            你有<span class="red">8</span>个订单需要处理
        </div>
        <div class="admin-content">
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item name="1">
                    <div slot="title" class="content-title">
                        <div>1号桌 <span style="color: #969799">(2019-05-01)</span></div>
                        <div>共计 9</div>
                        <van-button type="primary" size="mini">完成</van-button>
                    </div>
                    <div class="content-box">
                        <div>回锅肉（大份）</div>
                        <div>x 2</div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin",
        data() {
            return {
                activeName: "1"
            }
        }
    }
</script>

<style scoped lang="less">
.admin{
    .red{
        color: #f44;
    }
    .admin-header{
        text-align: center;
        height: 45px;
        line-height: 45px;
        background-color: #dee1e6;
    }
    .admin-content{
        .content-title{
           display: flex;
            justify-content: space-between;
        }
        .content-box{
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>