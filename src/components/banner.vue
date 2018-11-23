<template>
    <div class="banner min-width">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in bannerList" :key="index" class="banner_img">
                <img v-bind:src="item">
            </swiper-slide>
            <div class="swiper-pagination "  slot="pagination"></div>
        </swiper>
        <div class="swiper-scrollbar"></div>

    </div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "banner",
        props:['bannerList'],
        data() {
            return {
                swiperOption: {//swiper3
                    autoplay: 1000,
                    speed: 700,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true
                    }
                },
                //分页器设置
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods:{

        }
    }
</script>
<style>
    .banner .swiper-pagination-bullet{
        width: 40px;
        height: 5px;
        background-color: white;
        opacity: 0.6;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
    }
    .banner .swiper-pagination-bullet-active{
        background-color: #000;
    }
</style>
<style scoped>
    .banner_img img{
        width: 100%;
    }
    .swiper-pagination{
        text-align: right;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-right: 120px;
    }
    @media screen and (max-width: 768px) {
        .banner_img img {
            min-height: 12.5rem;
        }
    }
</style>
