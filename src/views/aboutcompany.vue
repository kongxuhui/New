<template>
    <div class="aboutcompany">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner></banner>
        <div class="company min-width">
            <div class="width">
                <div class="title">
                    <h2>{{$t('message.successfullysubscribed')}}</h2>
                    <p>COMPANY INTRODUCTION</p>
                </div>
                <div class="text" v-if="!$store.state.ispc">
                    <p>{{$t('message.COMPANYINTRODUCTION')}}</p>
                </div>
                <div class="img">
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                </div>
                <div class="text" v-if="$store.state.ispc">
                    <p>{{$t('message.COMPANYINTRODUCTION')}}</p>
                </div>
            </div>
        </div>
        <div class="company min-width">
            <div class="width">
                <div class="title">
                    <h2>企业文化</h2>
                    <p>CORPORATE CULTURE</p>
                </div>
                <div class="text">
                    <p>{{$t('message.CORPORATECULTURE')}}</p>
                </div>
                <div class="img">
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                </div>

            </div>
        </div>
        <div class="company min-width">
            <div class="width">
                <div class="title">
                    <h2>荣誉展示</h2>
                    <p>HONOR DISPLAY</p>
                </div>
                <div class="img" v-if="$store.state.ispc">
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                    <img src="../assets/img/company_03.jpg"/>
                </div>
                <div class="width" v-if="!$store.state.ispc">
                    <swiper :options="swiperOption">
                        <swiper-slide class="banner-item">
                            <div>
                                <img src="../assets/img/company_03.jpg"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="banner-item">
                            <div>
                                <img src="../assets/img/company_03.jpg"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="banner-item">
                            <div>
                                <img src="../assets/img/company_03.jpg"/>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
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
        name: "aboutcompany",
        data(){
            return{
                swiperOption: {
                    slidesPerView: 1,
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

        },
        components:{
            navigation,
            moNavigation,
            subscribe,
            footerd,
            banner,
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped lang="less">
    .company{
        >div{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 10px 0 50px 0;
        }
        .text{
            font-size: 18px;
            color: #666666;
            text-align: center;
            padding-bottom: 20px;
            >p{
                line-height: 30px;
                margin-top: 10px;
            }
        }
        background-color: #ebebeb;
        .img{
            padding: 15px 0 0px 0;
            text-align: center;
            >img{
                width: 30%;
                display: inline-block;
            }
            >img:nth-child(2){
                margin: 0 3.3%;
            }
        }
    }
    .company:nth-child(even){
        background-color: white;
    }
    .title{
        padding: 20px 0;
        text-align: center;
        h2{
            font-size: 36px;
            font-weight: 500;
            padding: 7px 0;
        }
        p{
            font-size: 18px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 768px) {
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
        .company{
            .banner-item{
                >div{
                    text-align: center;
                }
            }
            >div{
                padding: 1rem 0 1.8rem 0;
            }
            .img>img{
                width: 95%;
                margin-bottom: 0.6rem;
            }
            .img>img:nth-child(2){
                margin: 0 0 0.6rem 0;
            }
            .text{
                padding: 0 0.8rem;
            }
        }
        .title{
            text-align: center;
            h2{
                font-size: 1.8rem;
                font-weight: 500;
                padding: 0.5rem 0;
            }
            p{
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
</style>
