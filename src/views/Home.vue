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
                <div class="content-header">
                    <div class="menu" :class="{'menu-active': activeTab === 'order'}" @click="topTabChange('order')">
                        点餐
                    </div>
                    <div class="menu" :class="{'menu-active': activeTab === 'haveOrder'}"
                         @click="topTabChange('haveOrder')">已点菜单
                    </div>
                </div>
                <router-view/>
                <!--已点菜单-->
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        data() {
            return {
                activeTab: "order",
                menuContentList: [
                    {
                        id: 1,
                        menuId: 1
                    }
                ]
            }
        },
        mounted() {
            this.activeTab = this.$route.name
        },
        methods: {
            onHeadLeft() {
            },
            onHeadRight() {
            },
            topTabChange(menu) {
                this.activeTab = menu;
                this.$router.push(menu);
            }
        }
    }
</script>

<style lang="less">
    .home {
        width: 100%;
        height: 100%;

        .head {
        }

        .content {
            width: 100%;
            height: calc(100% - 46px);

            .content-container {
                text-align: left;
                width: 100%;
                height: 100%;

                .content-header {
                    width: 100%;
                    display: flex;
                    flex: 1;
                    position: relative;
                    justify-content: space-around;
                    font-size: 14px;
                    height: 45px;
                    line-height: 45px;
                    color: #7d7e80;
                    border-width: 1px 0;
                    border-color: #ebedf0;
                    border-style: solid;

                    .menu-active {
                        font-weight: 500;
                        color: #323233;
                        position: relative;
                    }

                    .menu-active:after {
                        position: absolute;
                        content: " ";
                        z-index: 1;
                        width: 20px;
                        left: calc(50% - 10px);
                        bottom: 0;
                        height: 3px;
                        border-radius: 3px;
                        background-color: #f44;
                    }
                }


            }
        }

    }
</style>
