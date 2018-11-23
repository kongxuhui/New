<template>
    <div class="goods">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner></banner>
        <div class="features width">
            <h2>产品特色技术</h2>
            <p>感受特色技术的强大</p>
            <div>
                <ul>
                    <li>
                        <div class="img">
                            <img src="../assets/img/tag1.png" alt="">
                        </div>
                        <p>降噪耳机</p>
                        <div class="overhide"> *降噪耳机，采用主动噪音控制，不同于一般耳机的被动隔音。</div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/tag2.png" alt="">
                        </div>
                        <p>IPX-6防水级别</p>
                        <div class="overhide"> *大浪的防水保护，可以持续2-3分钟抵抗水下3米的深度，100公升/分钟的流速，100n/m的压力。</div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/tag3.png" alt="">
                        </div>
                        <p>HI-FI动感魔音</p>
                        <div class="overhide">*频率所对应的灵敏度数值就是频率响应，绘制成图象就是频率响应曲线,形成高保真HI-FI</div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/img/tag4.png" alt="">
                        </div>
                        <p>超强续航能力</p>
                        <div class="overhide">*超强续航能力，充电五分钟higi两小时</div>
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
                                        <a href="javascript:;" class="fl">Amazon</a>
                                        <a href="javascript:;" class="fr">AliExpress</a>
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
                menuList: [],
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
                this.menuList = data.data || [];
            },
        },
        created(){
            this.getData(this.url);
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
    }
    .swiper-button-next{
        width: 35px;
        height: 55px;
        background: url("../assets/img/nexy.png") no-repeat center;
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
                        display: inline-block;
                        height: 35px;
                        line-height: 35px;
                        width: 45%;
                        color: white;
                        font-size: 20px;
                    }
                    a:first-child{
                        background-color: #f22a2a;
                    }
                    a:last-child{
                        background-color: #000000;
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
                        width: 80%;
                    }
                    padding-top: 20px;
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
