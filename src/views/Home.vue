<template>
  <div class="home">
    <div class="head">
      <van-nav-bar
              title=""
              left-text="返回"
              right-text="按钮"
              left-arrow
              @click-left="onHeadLeft"
              @click-right="onHeadRight">
      </van-nav-bar>
    </div>
    <div class="content">
        <div class="content-container">
            <van-tabs v-model="activeTab" animated :line-width="20">
                <van-tab title="点餐">
                    <div class="order-container">
                        <div class="order-left">
                            <van-badge-group :active-key="activeMenu" @change="onChange">
                                <van-badge v-for="(item, index) in menuList" :key="index" :title="item.name" :info="item.info" />
                            </van-badge-group>
                        </div>
                        <div class="order-right">right</div>
                    </div>
                </van-tab>
                <van-tab title="已点菜单"></van-tab>
            </van-tabs>
          <div class="content-header">
            <div>点餐</div>
            <div>已点菜单</div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    data() {
        return{
            activeTab: "",
            activeMenu: "",
            menuList: [
                {
                    id: 1,
                    name: "菜单一",
                    info: "3"
                },
                {
                    id: 2,
                    name: "菜单二",
                    info: ""
                },
            ]
        }
    },
    methods: {
        onHeadLeft(){},
        onHeadRight(){},
        onChange(){}
    }
}
</script>

<style lang="less">
  .home{
    width: 100%;
    height: 100%;
    .head{}
    .content{
      width: 100%;
      height: 100%;
        .content-container{
            text-align: left;
            width: 100%;
            height: 100%;
          .content-header{
            width: 100%;
            display: flex;
            position: relative;
            justify-content: space-around;
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            color: #7d7e80;
          }
          .content-header:after{
            content: " ";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            border-width: 1px 0;
            border-color: #ebedf0;
            border-style: solid;
          }
            .order-container{
                display: flex;
                height: 100%;
                .order-left{
                    background-color: #f8f8f8;
                    width: 6rem;
                    height: 100%;
                }
                .order-right{
                    width: 100%;
                }
            }

        }
    }

  }
</style>
