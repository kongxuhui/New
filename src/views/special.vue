<template>
    <div class="special">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner></banner>
        <div class="min-width music" v-for="(item,index) in sub_del.subject_img" :key="index" v-if="index<1">
            <img v-bind:src="item"  v-if="$store.state.ispc"/>
        </div>
        <div class="min-width">
            <div class="width shopmsg clearfix">
                <img v-bind:src="pro_del.sale_img" class="right"/>
                <div class="left">
                    <h2>{{pro_del.size}}</h2>
                    <h2>{{pro_del.name}}</h2>
                    <div class="text">
                        <p>{{pro_del.descript}}</p>
                    </div>
                </div>
            </div>
        </div> 
        <div class="video min-width">
            <img src="../assets/img/backbg_03.jpg"/>
            <video class="videobox" v-bind:src="sub_del.subject_video"  width="320" height="240" controls="controls">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="min-width music" v-for="(item,index) in sub_del.subject_img" :key="index" v-if="index>=1">
            <img v-bind:src="item"  v-if="$store.state.ispc"/>
        </div>
        <div class="video min-width accord">
            <img src="../assets/img/backbg_03.jpg" v-if="$store.state.ispc"/>
            <div class="accordion width">
                <h2>{{pro_del.size}}</h2>
                <h2>{{pro_del.name}}</h2>
                <ul>
                    <li> <p>详细参数  <i class="icon" @click="show()"><img :src="isshow ? require('../assets/img/line-down.png') : require('../assets/img/line-add.png')"/></i></p>
                        <transition name="fade">
                            <div class="text" v-show="isshow">
                                <p>{{sub_del.size_info}}</p>
                            </div>
                        </transition>
                    </li>
                    <li> <p>技术特色 <i class="icon" @click="show_1()"><img :src="isshow_1 ? require('../assets/img/line-down.png') : require('../assets/img/line-add.png')"/></i></p>
                        <transition name="fade">
                            <div class="text" v-show="isshow_1">
                                <p>{{sub_del.technology_info}}</p>
                            </div>
                        </transition>
                    </li>
                    <li> <p>常见问题 <i  @click="show_2()" class="icon"><img :src="isshow_2 ? require('../assets/img/line-down.png') : require('../assets/img/line-add.png')"/></i></p>
                        <transition name="fade">
                            <div class="text" v-show="isshow_2">
                                <p>{{sub_del.problem}}</p>
                            </div>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
        <subscribe></subscribe>
        <footerd></footerd>
    </div>
</template>

<script>
    import navigation from '../components/navigation.vue'
    import moNavigation from '../components/mo/navitation.vue'
    import subscribe from '../components/subscribe.vue'
    import footerd from '../components/footerd.vue'
    import banner from '../components/banner.vue'
    export default {
        name: "special",
        data(){
            return{
                isshow: true,
                isshow_1: false,
                isshow_2: false,                
                url_1: 'model_subject_page/info',
                url_2: 'product/info',                
                pro_id: '',
                pro_del: {},
                sub_del: {},
            }
        },
        methods:{
            queryCallBack(data) {
                console.log(this.pro_del);
                this.pro_del = data.data || {};
            },
            show(){
                if(this.isshow_1 == true || this.isshow_2 == true ){
                    this.isshow_1 = false;
                    this.isshow_2 = false;                    
                }
                this.isshow = !this.isshow;
            },
            show_1(){
                if(this.isshow == true || this.isshow_2 == true ){
                    this.isshow = false;
                    this.isshow_2 = false;                    
                }
                this.isshow_1 = !this.isshow_1;
            },
            show_2(){
                if(this.isshow_1 == true || this.isshow == true ){
                    this.isshow_1 = false;
                    this.isshow = false;                    
                }
                this.isshow_2 = !this.isshow_2;
            }
        },
        created(){
            this.getData(this.url_2 +'?id='+ this.$route.query.id);
            this.$http.get(this.url_1+ '?lang=' + this.getCookie('lang')+'&product_id=' + this.$route.query.id).then((data_1) => {
                this.sub_del = data_1.data || {};
            })
        },
        components:{
            navigation,
            moNavigation,
            footerd,
            subscribe,
            banner,
        }
    }
</script>

<style scoped lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .accordion{
        position: absolute;
        top: 30px;
        left: 50%;
        color: white;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        h2{
            font-size: 36px;
            font-weight: 500;
            color: white;
        }
        ul{
            padding-top: 15px;
        }
        li{
            padding-top: 10px;
            font-size: 18px;
            width: 45%;
            >p{
                border-bottom: 1px solid #626262;
                height: 35px;
                line-height: 35px;
            }
            .icon{
                float: right;
                cursor: pointer;
            }
        }
        .text{
            width: calc(100%);
            padding-top: 5px;
            color: #959493;
            font-size: 14px;
            line-height: 25px;
        }
    }
    .videobox{
        width: 70%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%);
        -moz-transform: translateY(-50%) translateX(-50%);
        -ms-transform: translateY(-50%) translateX(-50%);
        -o-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
    }
    .music>img{
        width: 100%;
    }
    .video{
        position: relative;
    }
    .video>img{
        width: 100%;
        max-height: 500px;
    }
    .shopimg>img{
        width: 100%;
    }
    .shopmsg{
        padding: 25px 0;
        margin: 0 auto;
        .left{
            width: 70%;
            float: left;
            display: inline-block;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding-right: 20px;
            vertical-align: middle;
            .text{
                padding-top: 20px;
                font-size: 14px;
                color: #666;
                p{
                    padding: 3px 0;
                    line-height: 25px;
                }
            }
        }
        .right{
            display: inline-block;
            float: right;
            padding: 0;
            margin: 0;
            width: 30%;
        }
        .left>h2{
            color: #666666;
            font-size: 36px;
            text-align: center;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 768px) {
        *{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .shopmsg .left{
            padding-right: 0;
        }
        .subscribe{
            width: 100%;
            overflow: hidden;
        }
        .shopimg{
            height: 13rem;
            background: url("../assets/img/shopimg3_02.jpg") no-repeat center;
            background-size: cover;
        }
        .video{
            height: 13rem;
            background: url("../assets/img/backbg_03.jpg") no-repeat center;
            background-size: cover;
        }
        .music{
            height: 13rem;
            background: url("../assets/img/muckbg_02.jpg") no-repeat center;
            background-size: cover;
        }
        .accord{
            height: auto!important;
            .accordion{
                padding-bottom: 2rem;
                padding-top: 1rem;
                position: static;
                -webkit-transform: translateX(0);
                -moz-transform: translateX(0);
                -ms-transform: translateX(0);
                -o-transform: translateX(0);
                transform: translateX(0);
                li>p{
                    font-size: 1rem;
                }
                .text{
                    font-size: .9rem;
                }
            }
        }
        .accordion{
            h2{
                font-size: 1.6rem;
                text-align: center;
            }
            ul{
                padding: 0 0.8rem;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                li{
                    width: 100%;
                    .text{
                        width: 100%;
                    }
                }
            }
        }
        .shopmsg{
            padding: 1.2rem 0.8rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            >.right,.left{
                display: block;
                float: none;
            }
            >img{
                margin: 0 auto!important;
                width: 60%!important;
            }
            >div{
                width: 100% !important;
                h2{
                    font-size: 1.6rem!important;
                }
            }
        }
    }
</style>
