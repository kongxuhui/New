<template>
    <div class="goods">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner :banner-list="bannerList"></banner>
        <div class="features width">
            <h2>产品特色技术</h2>
            <p>感受特色技术的强大</p>
            <div>
                <ul>
                    <li v-for="(item,index) in charaList.characteristic_icon" v-if="index == 0">
                        <div class="img">
                            <img v-bind:src="item" alt="">
                        </div>
                        <!-- <p>降噪耳机</p> -->
                        <div class="overhide">{{charaList.characteristic_a}}</div>
                    </li>
                    <li v-for="(item,index) in charaList.characteristic_icon" v-if="index == 1">
                        <div class="img">
                            <img v-bind:src="item" alt="">
                        </div>
                        <!-- <p>IPX-6防水级别</p> -->
                        <div class="overhide">{{charaList.characteristic_b}}</div>
                    </li>
                    <li v-for="(item,index) in charaList.characteristic_icon" v-if="index == 2">
                        <div class="img">
                            <img v-bind:src="item" alt="">
                        </div>
                        <!-- <p>HI-FI动感魔音</p> -->
                        <div class="overhide">{{charaList.characteristic_c}}</div>
                    </li>
                    <li v-for="(item,index) in charaList.characteristic_icon" v-if="index == 3">
                        <div class="img">
                            <img v-bind:src="item" alt="">
                        </div>
                        <!-- <p>超强续航能力</p> -->
                        <div class="overhide">{{charaList.characteristic_d}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="min-width typeclass" v-for="(item,index) in menuList" :key="index">
            <div>
                <div class="top min-width">
                    <img v-bind:src="item.menu_img" width="100%;" class=""/>
                    <div class="ccc"></div>
                    <h2>{{item.menu_name}}</h2>
                    <!-- <p>我的世界，我主宰</p> -->
                </div>
                <div class="content">
                    <div class="one width">
                        <swiper :options="swiperOption">
                            <swiper-slide class="list" v-for="(item_1,index_1) in item.product" :key="index_1">
                                <div class="box">
                                    <div class="img">
                                        <img v-bind:src="item_1.img">
                                        <p>{{item_1.size}}</p>
                                        <div class="remark">
                                            <p>{{item_1.name}}</p>
                                            <p class="price">￥ <span>{{item_1.price}}</span></p>
                                        </div>
                                    </div>
                                    <div class="btn clearfix">
                                        <a href="javascript:;" class="fl" data-text="Amazon"><span>Amazon</span></a>
                                        <a href="javascript:;" class="fr" data-text="AliExpress"><span>AliExpress</span></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <subscribe></subscribe>
        <footerd></footerd>
    </div>
</template>

<script>
    import navigation from '@/components/navigation.vue'
    import moNavigation from '../components/mo/navitation.vue'
    import subscribe from '@/components/subscribe.vue'
    import footerd from '@/components/footerd.vue'
    import banner from '@/components/banner.vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "goods",
        data(){
            return{
                url: 'product/menu_list',
                url_1: 'model_product_page/info',
                url_2: 'model_main_page/info',
                menuList: [],
                charaList: {},
                bannerList: [],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        methods:{
            queryCallBack(data) {
                // this.bannerList = data.data.banner || [];
                this.menuList = data.data || [];
            },
        },
        created(){
            this.getData(this.url);
            this.$http.get(this.url_1+ '?lang=' + this.getCookie('lang')).then((data_1) => {
                this.charaList = data_1.data || {};
            })
            this.$http.get(this.url_2).then((data_2) => {
                this.bannerList = data_2.data.banner || {};
            })
            if(!this.$store.state.ispc){
                this.swiperOption.slidesPerView = 1
            }
        },
        components:{
            navigation,
            moNavigation,
            footerd,
            subscribe,
            banner,
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped lang="less">
    .swiper-button-prev{
        width: 35px;
        height: 55px;
        background: url("../assets/img/prev.png") no-repeat center;
        left: 0px;
    }
    .swiper-button-next{
        width: 35px;
        height: 55px;
        background: url("../assets/img/nexy.png") no-repeat center;
        right: 0px;
    }
    .typeclass{
        .ccc{
            width: 100%;
            height: 10px;
            background-color: #ccc;
        }
        .content{
            .blok{
                height: 35px;
                background-color: #000;
            }
            background-color: #ebebeb;
            padding-top: 25px;
            .one{
                margin-top: 15px;
            }
            .list{
                .box{
                    width: 80%;
                    margin: 0 auto;
                    background-color: white;
                }
                .btn{
                    padding-top: 10px;
                    padding-bottom: 25px;
                    background-color: #ebebeb;
                    a{
                        color: white;
                        background-color: #000;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        display: inline-block;
                        height: 35px;
                        min-width: 35%;
                        line-height: 35px;
                        font-size: 20px;
                        margin-right: 20px;
                        overflow: hidden;
                        position: relative;
                        &::before,
                        &::after{
                            content: attr(data-text);
                            position: absolute;
                            width: 100%;
                            // height: 44%;
                            // padding: 3% 3%;
                            background: #000;
                            color: #fff;
                            overflow: hidden;
                            -webkit-transition: -webkit-transform 0.3s;
                            transition: transform 0.3s;
                            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                        }
                        &::before {
                            // padding-top: 10px;
                            // top: 4px;
                            left: 0;
                        }
                        &::after {
                            bottom: 0;
                            line-height: 0;
                        }
                        >span {
                            display: block;
                            padding-left: 4%;
                            width: 96%;
                            height: 100%;   
                            line-height: 35px;
                            -webkit-transform: scale3d(0.2, 0.2, 1);
                            transform: scale3d(0.2, 0.2, 1);
                            opacity: 0;
                            background: red;
                            -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                            transition: transform 0.3s, opacity 0.3s;
                            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                        }
                        &:hover::before {
                            -webkit-transform: translate3d(0, -100%, 0);
                            transform: translate3d(0, -100%, 0);
                        }
                        &:hover::after {
                            -webkit-transform: translate3d(0, 100%, 0);
                            transform: translate3d(0, 100%, 0);
                        }
                        &:hover > span {
                            opacity: 1;
                            -webkit-transform: scale3d(1, 1, 1);
                            transform: scale3d(1, 1, 1);
                        }
                    }
                }
                text-align: center;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                .img{
                    border-bottom: 3px solid #000;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    >img{
                        width: 100%;
                        height: 270px;
                    }
                    >p{
                        text-align: right;
                        color: #666;
                        font-size: 16px;
                        padding-right: 20px;
                    }
                    .remark{
                        text-align: left;
                        padding-top: 10px;
                        color: #666;
                        font-size: 16px;
                        text-indent: 10px;
                        p{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .price{
                            padding-top: 3px;
                            color: #f22a2a;
                            font-size: 14px;
                            border-bottom: 3px solid #666666;
                            margin-bottom: 2px;
                            >span{
                                font-size: 22px;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }
        h2{
            letter-spacing: 2px;
            font-weight: 500;
            color: white;
            font-size: 32px;
            text-align: center;
            padding-top: 20px;
        }
        .top>p{
            padding: 5px 0;
            font-size: 16px;
            color: white;
            text-align: center;
            font-weight: 500;
            position: relative;
        }
        .top{
            width: 100%;
            padding: 20px 0;
            background-color: #000;
        }
        .top>p:after{
            content: ' ';
            font-size: 0;
            height: 3px;
            width: 70px;
            position: absolute;
            left: 50%;
            bottom: -8px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            background-color: white;
        }
    }
    .features{
        padding-top: 20px;
        color: #666666;
        width: 80%;     
        ul{
            li{
                display: inline-block;
                width: 24%;
                text-align: center;
                vertical-align: top;
                p{
                    font-size: 18px;
                    color: #262626;
                }
                .img{
                    line-height: 170px;
                    height: 170px;
                    vertical-align: bottom;
                }
                >div:last-child{
                    padding-top: 10px;
                    line-height: 20px;
                    font-size: 14px;
                    width: 70%;
                    margin: 0 auto;
                }
            }
        }
        >h2{
            font-size: 32px;
            font-weight: 500;
            text-align: center;
            padding-bottom: 10px;
        }
        >p{
            font-size: 18px;
            text-align: center;
        }
    }
    @media screen and (max-width: 768px) {
        .typeclass{
            .top{
                padding: 0.7rem 0;
            }
            .top>h2{
                font-size: 1.6rem;
            }
            .top>p{
                font-size: 1rem;
            }
            .content{
                padding-top: 0.8rem;
                .box{
                    width: 90% !important;
                    .img{
                        border:0;
                    }
                    .img>.remark{
                        text-align: center;
                        .price{
                            border:0;
                        }
                    }
                }
            }
        }
        .features{
            h2{
                font-size: 1.5rem;
                padding-bottom: 0.3rem;
            }
            >p{
                font-size: 1rem;
            }
        }
        .features ul{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: 0.5rem;
            li{
                .img{
                    height: 6rem!important;
                    line-height: 6rem!important;
                }
                .img>img{
                    width: 13vw;
                }
                p{
                    font-size: 0.8rem;
                }
                >div:last-child{
                    font-size: 0.6rem;
                    width: 90%;
                    padding-top: 0.3rem;
                }
            }
        }
    }
</style>
