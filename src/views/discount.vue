<template>
    <div class="discount">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner></banner>
        <div v-if="$store.state.ispc" class="min-width discount-box">
            <ul class="discount-liat">
                <li class="clearfix" v-for="(item,index) in discountList" :key="index">
                    <div class="shop-img"><img v-bind:src="item.product.sale_img"/></div>
                    <div class="shop-text">
                        <h2>{{item.product.size}}  {{item.product.name}}</h2>
                        <p>{{item.discount_descript}}</p>
                    </div>
                    <div class="shop-code">
                        <p>{{item.discount_code}}
                            <img v-if="!ishide && item.type !='big'" src="../assets/img/yellow_code.png"/>
                            <span v-if="!ishide && item.type !='big'" @click="isShowAlert = true">{{$t('message.Getdiscountcode')}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mo-box" v-if="!$store.state.ispc">
            <div class="discount-mo-box" v-for="(item,index) in discountList" :key="index">
                <div class="img"><img v-bind:src="item.product.sale_img"/></div>
                <div class="text">
                    <h2><span class="over">{{item.product.size}}  {{item.product.name}}</span> <i class="down"><img src="../assets/img/down.png"/></i></h2>
                    <p>{{item.discount_descript}}</p>
                    <div class="code">
                        <span>{{item.discount_code}}  
                            <b v-show="!ishide && item.type !='big'" @click="isShowAlert = true">
                                <img src="../assets/img/mo-yellowbg_03.png"/>
                                <i>{{$t('message.Getdiscountcode')}}</i>
                            </b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <mo-alert @closeM="close"  v-if="isShowAlert && !$store.state.ispc"></mo-alert>
        <transition
                name="custom-classes-transition"
                enter-active-class="animated flipInX"
                leave-active-class="animated flipOutX"
        >
            <alert @getFlag="getFlag_1" @closeM="close"  v-if="isShowAlert && $store.state.ispc"></alert>
        </transition>
        <footerd></footerd>
    </div>
</template>

<script>
    import navigation from '@/components/navigation.vue'
    import moNavigation from '../components/mo/navitation.vue'
    import subscribe from '@/components/subscribe.vue'
    import footerd from '@/components/footerd.vue'
    import banner from '@/components/banner.vue'
    import alert from '@/components/alert.vue'
    import moAlert from '@/components/mo/alert.vue'
    export default {
        name: "discount",
        data(){
            return{
                url_1: 'user/add',
                url_2: 'discount/list',
                list:[1,2,2,1],
                isShowAlert: false,
                isdown: false,
                discountList: [],
                ishide: false,
            }
        },
        created(){
            // console.log(this.$store.state.ispc)
        },
        methods:{
            queryCallBack(data) {
                this.discountList = data.data.list || {};
            },
            getFlag_1(data){
                this.ishide = data;
            },
            close(data){
                this.isShowAlert = data;
            }, 
        },
        created() {
            this.getData(this.url_2);
        },
        components:{
            navigation,
            moNavigation,
            subscribe,
            footerd,
            banner,
            alert,
            moAlert
        }
    }
</script>

<style scoped lang="less">
    .discount-box{
        background-color: #dddddd;
        li{
            background-color: white;
            padding: 20px 0;
            vertical-align: middle;
            margin-bottom: 15px;
            >div{
                display: inline-block;
            }
        }
        .shop-img{
            width: 25%;
            text-align: center;
            >img{
                width: 80%;
            }
        }
        .shop-text{
            vertical-align: middle;
            width: 42%;
            h2{
                font-size: 30px;
                font-weight: 500;
                padding-bottom: 6px;
                color: #262626;
            }
            p{
                position: relative;
                color: #666;
                font-size: 18px;
                line-height: 25px;
                font-weight: 500;
            }
        }
        .shop-code{
            width: 240px;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin-left: 10%;
            p{
                display: inline-block;
                position: relative;
                font-size: 32px;
                letter-spacing: 3px;
                border: 2px solid #f36a22;
                padding: 2px 5px;
                width: 100%;
                >img{
                    position: absolute;
                    top:-2px;
                    left:0;
                    width: 100%;
                    height: calc(100% + 2px);
                }
                >span{
                    cursor: pointer;
                    position: absolute;
                    top:50%;
                    text-align: left;
                    text-indent: 1em;
                    -webkit-transform: translateY(-50%);
                    -moz-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    -o-transform: translateY(-50%);
                    transform: translateY(-50%);
                    left:0;
                    width: 100%;
                    color: white;
                    font-size: 24px;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .mo-box{
            background-color: #e5e5e5;
        }
        .discount-mo-box{
            padding: 0.4rem 0;
            margin-bottom: 0.3rem;
            background: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                padding-right: 0.8rem;
                .code{
                    padding-top: 0.5rem;
                    span{
                        font-size: 1.3rem;
                        letter-spacing: 0.2rem;
                        display: inline-block;
                        border: 2px solid #f36a22;
                        padding: 0.1rem 0.3rem;
                        position: relative;
                        width: 12rem;
                        i{
                            position: absolute;
                            top: 50%;
                            -webkit-transform: translateY(-50%);
                            -moz-transform: translateY(-50%);
                            -ms-transform: translateY(-50%);
                            -o-transform: translateY(-50%);
                            transform: translateY(-50%);
                            left: 0.4rem;
                            font-weight: 400;
                            width: 100%;
                            font-style: normal;
                            font-size: 1rem;
                            color: white;
                        }
                        img{
                            position: absolute;
                            height:  calc(100% + 0.2rem);
                            top:-2px;
                            left:0;
                            width: 100%;
                        }
                    }
                }
                p{
                    font-size: 0.9rem;
                    color: #666;
                    line-height: 1.2rem;
                }
                h2{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        width: calc(100% - 1.3rem);
                        display: inline-block;
                    }
                    font-size: 1rem;
                    font-weight: 500;
                    .down{
                        width: 1.2rem;
                        display: inline-block;
                        img{
                            width: 1.2rem;
                        }
                    }
                    .down-left{
                        height: 1.2rem;
                        img{
                            height: 1.2rem;
                        }
                    }
                }
                width: 70%;
            }
            .img{
                width: 30%;
                text-align: center;
                img{
                    width: 90%;
                }
            }
        }
    }

</style>
