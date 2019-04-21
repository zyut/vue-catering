<template>
    <div class="order-container">
        <div class="order-left">
            <van-badge-group :active-key="activeMenu" @change="onChangeMenu">
                <van-badge v-for="(item, index) in menuleft" :key="index" :title="item.name" :info="item.number" />
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
                            :thumb="val.img"
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
                <div class="info-left" :style="{backgroundImage: 'url(' + formGoods.img + ')', backgroundSize:'contain'}"></div>
                <div class="info-right">
                    <div class="info-name">{{formGoods.name}}</div>
                    <div class="info-detail">{{formGoods.details}}</div>
                    <div class="info-price">￥{{formGoods.price}}</div>
                </div>
            </div>
            <div class="info-item">
                <div class="title">规格</div>
                <div class="item-box">
                    <div class="item-tag" :class="{'item-tag-active': formGoods.specsName === item.name}"
                         v-for="(item, index) in formGoods.specs" :key="index" @click="chooseSpecification(item, index)">{{item.name}}</div>
                </div>
            </div>
            <div class="submit-button" :class="{'submit-button-active': formGoods.specsName}" @click="onSubmit">选好了</div>
        </van-actionsheet>
    </div>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                showDetail: false,
                activeMenu: 0,
                scrollList: [],
                menuList: [
                    {
                        id: 1,
                        name: "菜",
                        info: 3
                    },
                    {
                        id: 2,
                        name: "汤",
                        info: null
                    },
                    {
                        id: 3,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 4,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 5,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 6,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 7,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 8,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 9,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 10,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 11,
                        name: "菜单二",
                        info: null
                    },
                    {
                        id: 12,
                        name: "菜单二",
                        info: null
                    },
                ],
                menuContentList:[
                    {
                        "class": "菜",
                        "class_id": 1,
                        "items": [
                            {
                                "id": "11",
                                "name": "回锅肉1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": require("../assets/logo.png"),
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    },{
                                        "name": "大份",
                                        "img": "/sss/xx/xd",
                                        "details": "满满一盘回锅肉",
                                        "unit": "份",
                                        "price": 48,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "12",
                                "name": "回锅肉2",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    },{
                                        "name": "大份",
                                        "img": "/sss/xx/xd",
                                        "details": "满满一盘回锅肉",
                                        "unit": "份",
                                        "price": 48,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "13",
                                "name": "回锅肉3",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    },{
                                        "name": "大份",
                                        "img": "/sss/xx/xd",
                                        "details": "满满一盘回锅肉",
                                        "unit": "份",
                                        "price": 48,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "14",
                                "name": "回锅肉4",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    },{
                                        "name": "大份",
                                        "img": "/sss/xx/xd",
                                        "details": "满满一盘回锅肉",
                                        "unit": "份",
                                        "price": 48,
                                        "stock": 9999
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "class": "汤",
                        "class_id": "2",
                        "items": [
                            {
                                "id": "21",
                                "name": "鸡蛋汤1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    }
                                ]
                            },
                            /*{
                                "id": "21",
                                "name": "鸡蛋汤1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "21",
                                "name": "鸡蛋汤1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "21",
                                "name": "鸡蛋汤1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    }
                                ]
                            },
                            {
                                "id": "21",
                                "name": "鸡蛋汤1",
                                "details": "美味的回锅肉,地道重庆菜",
                                "img": require("../assets/logo.png"),
                                "status": 1,
                                "price": 28,
                                "specs": [
                                    {
                                        "name": "小份",
                                        "img": "/sss/xx/xd",
                                        "details": "小份回锅肉适合一个人",
                                        "unit": "份",
                                        "price": 28,
                                        "stock": 9999
                                    }
                                ]
                            },*/
                        ]
                    }
                ],
                buyCardList: [
                    {
                        "id": "sfasdf",
                        "class_id": 1,
                        "item_id": "11",
                        "img": require("../assets/logo.png"),
                        "name": "回锅肉",
                        "spec": "小份",
                        "price": 28,
                        "number": 3
                    },
                    {
                        "id": "sfasdf",
                        "class_id": 1,
                        "item_id": "11",
                        "img": require("../assets/logo.png"),
                        "name": "回锅肉",
                        "spec": "大份",
                        "price": 28,
                        "number": 3
                    },
                    {
                        "id": "sfasdf",
                        "class_id": 1,
                        "item_id": "12",
                        "img": require("../assets/logo.png"),
                        "name": "回锅肉",
                        "spec": "大份",
                        "price": 28,
                        "number": 3
                    },
                    {
                        "id": "sfasdf",
                        "class_id": 2,
                        "item_id": "21",
                        "img": require("../assets/logo.png"),
                        "name": "回锅肉",
                        "spec": "大份",
                        "price": 28,
                        "number": 3
                    }
                ],
                formGoods: {
                    item_id: "",
                    name: "",
                    details: "",
                    img: "",
                    price: "",
                    specsName: "",
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
                let array = [];
                array = this.menuList.map((item, index) => {
                    let arr, number = null;
                    this.buyCardList.forEach((val, key) => {
                        arr = {
                            number: number,
                            ...item
                        };
                        if (item.id === val.class_id) {
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
                            if (items.id === val.item_id) {
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
            let doc = document.getElementsByClassName("order-content");
            for(let i =0;i < doc.length; i++) {
                this.scrollList[i] = doc[i].offsetTop;
            }
            this.$nextTick(function () {
                let scrollDiv = document.getElementsByClassName("order-right");
                scrollDiv[0].addEventListener('scroll', this.onScroll)
            })
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
                    specsName: "",
                    ...item
                };
                this.showDetail = true;
            },
            chooseSpecification(item, index) {
                this.formGoods.specsName = item.name;
                this.formGoods.price = item.price;
                this.formGoods.details = item.details;
                this.formGoods.img = item.img;
            },
            onSubmit() {
                if (this.formGoods.specsName) {
                    console.log("选好了");
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