<template>
    <div class="subscribe min-width">
        <div class="width">
            <div class="writemsg">
                <p><img src="../assets/img/message.jpg"/> <span>{{$t('message.SubscribetodeepLIAN')}}</span></p>
                <div class="text">
                    <div>时刻关注深联创所有最新动态</div>
                    <!-- <textarea disabled="disabled" placeholder="时刻关注深联创所有最新动态"></textarea> -->
                    <p class="clearfix"><input v-model="input1" type="email" class="fl" placeholder="输入你的电子邮箱"/><span class="bg fr" @click="handlePost"></span></p>
                </div>
                <div class="btn" v-if="!$store.state.ispc"><a href="javascript:;">{{$t('message.confirmsubscription')}}</a></div>
                <div class="hascribe" v-show="flag">
                    <p><img src="../assets/img/right.jpg" alt=""> <span>{{$t('message.successfullysubscribed')}}</span></p>
                    <p>{{$t('message.Tdb')}}</p>
                </div>
                <div class="hascribe" v-show="!flag_1">
                    <p>邮箱格式有误，请重新输入。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "subscribe",
        data() {
            return{
                url: 'user/add',
                shopList: [],
                input1:'',
                flag: false,
                flag_1: true,
            }
        },
        methods: {
            handlePost(){
                this.$http.post(this.url,{
                    email: this.input1,
                    lang: this.getCookie('lang')
                }).then(data => {
                    this.input1 = '';
                    if(data.success){
                        this.flag = data.success;
                    }else{
                        this.flag_1 = data.success;                        
                    }
                    setTimeout( () => {
                        this.flag = false;
                        this.flag_1 = true;                          
                    }, 2000)
                })
            }
        },
        created() {
            // this.getData(this.url);
        }
    }
</script>

<style scoped lang="less">
    input::-webkit-input-placeholder{
        color:#666;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#666;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#666;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        color:#666;
    }
    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .subscribe{
        padding: 30px 0;
        .hascribe{
            position: relative;
            text-align: center;
            width: 100%;
            background-color: #cecccd;
            color: #262626;
            font-size: 16px;
            margin-top: 15px;
            padding: 15px 0;
            >p{
                margin: 5px 0;
            }
            img{
                margin-right: 5px;
                width: 23px;
                height: 23px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
            }
        }
        .hascribe:after{
            content: "";
            width: 0px;
            height: 0px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid #cecccd;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            position: absolute;
            top: -20px;
            right: 10px;
        }
        padding-bottom: 25px;
        .text{
            margin-top: 25px;
        }
        text-align: center;
        .writemsg{
            width: 550px;
            margin: 0 auto;
        }
        .writemsg>p{
            line-height: 60px;
            font-size: 46px;
            color: #262626;
            letter-spacing: 3px;
        }
        .writemsg>p>span{
            vertical-align: middle;
        }
        .writemsg>p>img{
            -webkit-transform: translateY(3px);
            -moz-transform: translateY(3px);
            -ms-transform: translateY(3px);
            -o-transform: translateY(3px);
            transform: translateY(3px);
            display: inline-block;
            margin-right: 4px;
        }
        .text>div{
            padding: 8px;
            height: 200px;
            border: 1px solid #666;
            text-align: left;
            color: #666;
            letter-spacing:4px;
        }
        .text>textarea,.text>p{
            width: 100%;
        }
        .text>p{
            font-size: 0;
            border: 1px solid #666;
            margin-top: 15px;
        }
        .text>p>input{
            width: calc(100% - 35px);
            font-size: 16px;
            height: 30px;
            padding-left: 8px;
            letter-spacing:4px;
        }
        .text>p .bg{
            display: inline-block;
            width: 35px;
            height: 30px;
            background-color: red;
            background: url("../assets/img/right.jpg") no-repeat center;
            background-size: 75%;
        }
    }
    @media screen and (max-width: 768px) {
        .subscribe {
            padding-top: 0;
            .writemsg{
                .btn{
                    text-align: center;
                    margin-top: 1rem;
                    a{
                        height: 3rem;
                        line-height: 3rem;
                        letter-spacing: 0.5rem;
                        display: inline-block;
                        width: 60%;
                        color: white;
                        background-color: #000;
                        font-size: 1.4rem;
                    }
                }
                width: 90%;
                >p{
                    font-size: 2rem;
                    >img{
                        width: 3rem;
                        -webkit-transform: translateY(1px);
                        -moz-transform: translateY(1px);
                        -ms-transform: translateY(1px);
                        -o-transform: translateY(1px);
                        transform: translateY(1px);
                    }
                }
                .text{
                    margin-top: 1rem;
                    >p{
                        input{
                            height: 2.5rem;
                        }
                        .bg{
                            height: 2.5rem;
                        }
                    }
                }
            }
            .hascribe:after{
                left: 50%;
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }
    }
</style>
