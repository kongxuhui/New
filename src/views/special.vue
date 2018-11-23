<template>
    <div class="special">
        <navigation v-if="$store.state.ispc"></navigation>
        <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
        <banner></banner>
        <div class="min-width">
            <div class="width shopmsg clearfix">
                <img src="../assets/img/shopimg2.png" class="right"/>
                <div class="left">
                    <h2>NB-H88</h2>
                    <h2>头戴式无线降噪立体声蓝牙耳机</h2>
                    <div class="text">
                        <p>♥主动噪音消除 - 主动噪音消除技术消除分散的周围噪音，私人聆听体验只为你。将噪音降低85％，
                            通过轻按开关，降低环境噪音。
                            对于减少城市交通的噪音，在繁忙的办公室内飞机机舱的嗡嗡声或喧哗声很好。</p>
                        <p>♥高保真的声音使低音丰富而明显。中高档也很清晰和平衡。即使你转向高音量，失真也很小。</p>
                        <p>♥可折叠和舒适 - 头耳耳塞舒适。慷慨的记忆耳垫和柔软的皮革。完全可调的115度旋转耳机头带。随附一个免费的拉链盒，所以你可以保持在你的背包保护好或手
                            提箱。</p>
                        <p>♥蓝牙立体声 - 采用先进的蓝牙CSR芯片。失真很小。提供深沉，沉浸式的声音音量，使他们成为最
                            好的蓝牙无线耳机。</p>
                        <p>♥无线和有线连接 - 可靠的蓝牙无缝连接到所有蓝牙设备33英尺有效范围。直观的控制和内置麦克风</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="min-width shopimg"><img src="../assets/img/shopimg3_02.jpg"  v-if="$store.state.ispc"/></div>
        <div class="video min-width">
            <img src="../assets/img/backbg_03.jpg"/>
            <video class="videobox" src=""  width="320" height="240" controls="controls">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="music min-width"><img src="../assets/img/muckbg_02.jpg" v-if="$store.state.ispc"/></div>
        <div class="video min-width accord">
            <img src="../assets/img/backbg_03.jpg" v-if="$store.state.ispc"/>
            <div class="accordion width">
                <h2>NB-H88</h2>
                <h2>头戴式无线降噪立体声蓝牙耳机</h2>
                <ul>
                    <li> <p>详细参数  <i class="icon" @click="show = !show"><img :src="show ? require('../assets/img/line-down.png') : require('../assets/img/line-add.png')"/></i></p>
                        <transition name="fade">
                            <div class="text" v-if="show">
                                <p>高保真的声音使低音丰富而明显。中高档也很清晰和平衡。即使你转向高音量，失真也很小可折叠和舒适 - 头耳耳塞舒适。慷慨的记忆耳垫和柔软的皮革。
                                    完全可调的115度旋转耳机头带。随附一个免费的拉链盒，所以你可以保持在你的背包保护好或手 提箱。可靠的蓝牙无缝连接到所有蓝牙设备33英尺有效范围。直观的控制和内置麦克风</p>
                                <p> 3.5mm AUX端口，带有电缆（附带），用于飞行模式或MP3设备。 300mAh电池使用时间，2小时充电支持14小时主动降噪播放或16小时蓝牙模式。18个月保修。</p>
                            </div>
                        </transition>
                    </li>
                    <li> <p>技术特色 <i class="icon"><img src="../assets/img/line-add.png"/></i></p>
                    </li>
                    <li> <p>常见问题 <i class="icon"><img src="../assets/img/line-add.png"/></i></p>
                    </li>
                    <li> <p>详细参数 <i class="icon"><img src="../assets/img/line-add.png"/></i></p>
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
                show: true,
                url_1: 'model_subject_page/info',
                url_2: 'product/info',                
                pro_id: '',
                pro_del: {},
                sub_del: {},
                // params,
            }
        },
        methods:{
            queryCallBack(data) {
                console.log(data);
                this.sub_del = data.data || {};
            }
        },
        beforeCreate() {
            // console.log(1)
        },
        created(){
            this.getData(this.url_1);
            this.getData(this.url_2 +'?id='+ this.$route.query.id);
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
