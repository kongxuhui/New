<template>
    <div class="allbanner min-width">
        <!-- swiper -->
        <div class="width">
            <swiper :options="swiperOption" style="position: relative">
                <swiper-slide class="banner-item" v-for="(item,index) in shopList" :key="index">
                    <div>
                        <div class="box">
                            <p>{{item.size}}</p>
                            <p>{{item.name}}</p>                            
                            <img v-bind:src="item.sale_img"/>
                        </div>
                        <div class="model">
                            <div class="btn">
                                <p>Amazon</p>
                                <p>AliExpress</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "allbanner",
        data(){
            return{
                url: 'product/list',
                shopList: [],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                    slidesPerGroup: 1,
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
                this.shopList = data.data.list || [];
                // this.swiperOption.slidesPerView = this.shopList.length;
            },
        },
        created(){
            this.getData(this.url);
            if(!this.$store.state.ispc){
                this.swiperOption.slidesPerView = 1
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted(){

        }
    }
</script>
<style scoped lang="less">
    .allbanner {
        .swiper-container{
            width: 100%;
        }
        background-color: #f0efef;
        padding: 40px 0;
    }
    .allbanner .banner-item{
        text-align: center;
        margin-right: 60px !important;
        height: 378px;
        // background-color: #f8f8f8;
        >div{
            position: relative;
            background-color: #fff;
            .box{
                padding-top: 20px;
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 18px;
                    margin: 10px 0;
                    font-family: '微软雅黑';
                    font-weight: 600;
                    padding: 0 30px;
                }
                img{
                    width: 100%;
                    height: 271px;
                }
            }
            .model{
                opacity: 0;
                position: absolute;
                -webkit-transition: all ease 0.3s;
                -moz-transition: all ease 0.3s;
                -ms-transition: all ease 0.3s;
                -o-transition: all ease 0.3s;
                transition: all ease 0.3s;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100;
                background-color: rgba(0,0,0,.5);
                >.btn{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translateY(-50%) translateX(-50%);
                    -moz-transform: translateY(-50%) translateX(-50%);
                    -ms-transform: translateY(-50%) translateX(-50%);
                    -o-transform: translateY(-50%) translateX(-50%);
                    transform: translateY(-50%) translateX(-50%);
                    font-size: 32px;
                    p{
                        color: rgba(255,255,255,.8);
                        border: 2px solid rgba(255,255,255,0.8);
                        margin: 8px 0;
                        padding: 2px 8px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .allbanner .banner-item>div:hover .model{
        opacity: 0.9;
    }

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
    @media screen and (max-width: 768px) {
        .allbanner {
            background-color: white;
            padding-bottom: 1rem;
            padding-top: 0;
            .banner-item > div .box{
                padding-top: 20px;
                background-color: #fff;
            }
            .banner-item{
                height: auto;
                > div .model{
                    position: static;
                    opacity: 1;
                    .btn{
                        position: static;
                        width: 100%;
                        background-color: white;
                        top:0;
                        left:0;
                        text-align: center;
                        -webkit-transform: translateY(0) translateX(0);
                        -moz-transform: translateY(0) translateX(0);
                        -ms-transform: translateY(0) translateX(0);
                        -o-transform: translateY(0) translateX(0);
                        transform: translateY(0) translateX(0);
                        >p{
                            height: 2.2rem;
                            line-height: 2.2rem;
                            padding: 0;
                            font-size: 1.4rem;
                            border: 0;
                            color: white;
                            opacity: 1;
                            width: 75%;
                            background-color: #000;
                            display: inline-block;
                        }
                    }
                }
            }
        }
        .allbanner .banner-item>div:hover .model{
            opacity: 1;
        }
    }
</style>
