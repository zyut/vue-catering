<template>
    <div class="order-container">
        <div class="order-left">
            <van-badge-group :active-key="activeMenu" @change="onChangeMenu">
                <van-badge v-for="(item, index) in menuleft" :key="index" :title="item.class" :info="item.number" />
            </van-badge-group>
        </div>
        <div class="order-right">
            <div class="order-content" v-for="(item, index) in menuRight" :key="index" :id="item.class_id">
                <div class="order-class">{{item.class}}</div>
                <div v-for="(val, key) in item.items">
                    <van-card
                            :num="val.number"
                            tag=""
                            :price="val.price"
                            :desc="val.details"
                            :title="val.name"
                            :thumb="'http://lyp256.cn' + val.img"
                            :origin-price="val.price"
                    >
                        <div slot="footer">
                            <van-button round type="info" size="mini" @click="chooseGoods(val,index)">选规格</van-button>
                        </div>
                    </van-card>
                </div>

            </div>
        </div>

        <!--弹出框-->
        <van-actionsheet v-model="showDetail" title=" " class="goods">
            <div class="info-box">
                <div class="info-left" :style="{backgroundImage: 'url(http://lyp256.cn' + formGoods.img + ')', backgroundSize:'contain'}"></div>
                <div class="info-right">
                    <div class="info-name">{{formGoods.name}}</div>
                    <div class="info-detail">{{formGoods.details}}</div>
                    <div class="info-price">￥{{formGoods.price}}</div>
                </div>
            </div>
            <div class="info-item">
                <div class="title">规格</div>
                <div class="item-box">
                    <div class="item-tag" :class="{'item-tag-active': formGoods.item_spec_name === item.name}"
                         v-for="(item, index) in formGoods.specs" :key="index" @click="chooseSpecification(item, index)">{{item.name}}</div>
                </div>
            </div>
            <div class="submit-button" :class="{'submit-button-active': formGoods.item_spec_name}" @click="onSubmit">选好了</div>
        </van-actionsheet>
    </div>
</template>

<script>
    import { menuListApi, submitCar, carList } from "@/api/getData";

    export default {
        name: "Order",
        data() {
            return {
                showDetail: false,
                activeMenu: 0,
                scrollList: [],
                menuList: [],
                menuContentList: [],
                buyCardList: [],
                formGoods: {
                    item_id: "",
                    name: "",
                    details: "",
                    img: "",
                    price: "",
                    item_spec_name: "",
                    specs:[
                        {
                            name: "",
                            img: "",
                            details: "",
                            price: ""
                        }
                    ]
                }
            }
        },
        computed:{
            menuleft:function() {
                if (!this.menuList.length || !this.buyCardList.length) {
                    return;
                }
                let array = [];
                array = this.menuList.map((item, index) => {
                    let arr, number = null;
                    this.buyCardList.forEach((val, key) => {
                        arr = {
                            number: number,
                            ...item
                        };
                        if (item.class_id === val.class_id) {
                            number = number + val.number;
                            arr = {
                                number: number,
                                ...item
                            }
                        }
                    });
                    return arr;
                });
                return array;
            },
            menuRight: function () {
                if (!this.menuContentList.length || !this.buyCardList.length) {
                    return;
                }
                let array = [];
                array = this.menuContentList.map((item, index) => {
                    let arr,obj;
                    arr = item.items.map((items, indexs) => {
                        let number = null;
                        this.buyCardList.forEach((val, key) => {
                            obj = {
                                number: number,
                                ...items
                            };
                            if (items.id === val.menu_id) {
                                number = number + val.number;
                                obj = {
                                    number: number,
                                    ...items
                                }
                            }
                        });
                        return {...obj};
                    });
                    return {
                        class: item.class,
                        class_id: item.class_id,
                        items: [...arr]
                    };
                });
                return array;
            }
        },
        mounted() {
            sessionStorage.setItem("tableId", "5cc828588e71a13938e3efc8");
            this.menuListApi();
            this.carList();
        },
        methods:{
            onChangeMenu(index) {
                this.activeMenu = index;
                let jump = document.querySelectorAll('.order-content');
                // 跳转页内锚点方法
                jump[index].scrollIntoView();
            },
            onScroll () {
                let scrollDiv = document.getElementsByClassName("order-right");
                let scrolled = scrollDiv[0].scrollTop;
                // 586、1063分别为第二个和第三个锚点对应的距离
                this.scrollList.forEach((item, index) => {
                    if(scrolled >= item) {
                        this.activeMenu = index;
                    }
                });
            },
            chooseGoods(item, index){
                this.formGoods = {
                    item_spec_name: "",
                    menu_id: item.id,
                    ...item
                };
                this.showDetail = true;
            },
            chooseSpecification(item, index) {
                this.formGoods.item_spec_name = item.name;
                this.formGoods.price = item.price;
                this.formGoods.details = item.details;
                this.formGoods.img = item.img ? item.img : this.formGoods.img;
            },

            // 获取菜单
           async menuListApi() {
                const res = await menuListApi({});
                if (res) {
                    this.menuList = res;
                    this.menuContentList = res;
                    this.$nextTick(function () {
                        let doc = document.getElementsByClassName("order-content");
                        for(let i =0;i < doc.length; i++) {
                            this.scrollList[i] = doc[i].offsetTop;
                        }
                        let scrollDiv = document.getElementsByClassName("order-right");
                        scrollDiv[0].addEventListener('scroll', this.onScroll)
                    })
                }
            },
            // 获取购物车
            async carList() {
                const res = await carList({
                    table_id: sessionStorage.tableId
                });
                if (res) {
                    this.buyCardList = res;
                }
            },
            async onSubmit() {
                if (this.formGoods.item_spec_name) {
                    this.formGoods.number = 1;
                    const res = await submitCar({
                        table_id: sessionStorage.tableId,
                        menu_id: this.formGoods.menu_id,
                        menu_spec_name: this.formGoods.item_spec_name,
                        number: this.formGoods.number
                    })
                    if (res) {
                        this.showDetail = false;
                        this.carList();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .order-container {
        display: flex;
        height: calc(100% - 47px);
        position: relative;
        .order-left {
            background-color: #f8f8f8;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 5rem;
            overflow-y: auto;
            overflow-style: unset;
        }

        .order-right {
            width: calc(100% - 5rem);
            height: 100%;
            margin-left: 5rem;
            overflow-y: auto;
            overflow-style: unset;
            .order-content{
                .order-class{
                    padding: 5px 15px;
                }
            }
        }

        .goods{
            height: 22rem;
            .info-box{
                padding: 15px 20px;
                display: flex;
                .info-left{
                    width: 6rem;
                    height: 6rem;
                }
                .info-right{
                    position: relative;
                    height: 6rem;
                    padding-left: 15px;
                    .info-name{
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .info-detail{
                        font-size: 12px;
                        line-height: 1.8rem;
                        color: #7d7e80;
                    }
                    .info-price{
                        position: absolute;
                        bottom: 0;
                        font-weight: 700;
                        font-size: 18px;
                        color: #f44;
                    }
                }
            }
            .info-item{
                padding: 0 20px 15px;
                .title{
                    color: #7d7e80;
                    margin-bottom: 12px;
                }
                .item-box{
                    display: flex;
                    .item-tag{
                        height: 1.8rem;
                        line-height: 1.8rem;
                        padding: 0 25px;
                        background-color: #eee;
                        margin-right: 0.8rem;
                    }
                    .item-tag-active{
                        background-color: #1989fa;
                        color: #fff;
                    }
                }
            }
            .submit-button{
                position: absolute;
                bottom: 15px;
                left: 20px;
                right: 20px;
                text-align: center;
                background-color: #7d7e80;
                height: 2.5rem;
                line-height: 2.5rem;
                color: #fff;
            }
            .submit-button-active{
                background-color: #1989fa;
                color: #fff;
            }
        }
    }
</style>