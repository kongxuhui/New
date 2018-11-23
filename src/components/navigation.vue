<template>
    <header class="min-width">
        <div class="header_box clearfix width">
            <div class="left">
                <img src="../assets/img/logo.png" width="206" height="30" alt="">
                <router-link to="/" class="active">{{$t('message.onlineshoppingmall')}}</router-link>
                <router-link to="/aboutcompany">{{$t('message.aboutcompany')}}</router-link>
                <router-link to="/discount">{{$t('message.Latestdiscount')}}<i>{{$t('message.discount')}}</i></router-link>
            </div>
            <div class="right clearfix">
                <div class="search"><input type="text" v-model="searchname"/><i class="icon"></i></div>
                <div class="city"><i class="icon"></i><span>中文-中国</span>
                    <div class="chouselange">
                        <p>请选择你的站点</p>
                        <div class="clearfix">
                            <div class="cityleft">
                                <ul>
                                    <li @click="tabCn"><a href="javascript:;">简体中文 <i class="rightbglan"></i></a></li>
                                    <li @click="tabEn"><a href="javascript:;">English</a></li>
                                </ul>
                            </div>
                            <div class="cityright">
                                <span><img src="../assets/img/chain.png" width="25"/> 中国</span>
                                <span><img src="../assets/img/chain.png" width="25"/> 中国</span>
                                <span><img src="../assets/img/chain.png" width="25"/> 中国</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "navigation",
        data(){
            return{
                searchname: ''
            }
        },
        methods:{
            tabEn: function () {
                this.$i18n.locale = 'en'
            },
            tabCn: function () {
                this.$i18n.locale = 'zh'
            }
        }
    }
</script>

<style scoped lang="less">
    header{
        .cityright{
            line-height: 30px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 10px;
            font-size: 14px;
            text-align: left;
            span{
                float: none!important;
                margin-right: 10px;
                display: inline-block;
            }
        }
        height: 80px;
        background-color: #000;
        .header_box{
            padding: 0 5px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            >.left{
                float: left;
            }
            .right{
                float: right;
                >div{
                    float: left;
                    color: white;
                }
                .city{
                    .chouselange{
                        opacity: 0;
                        -webkit-transition: all ease 0.4s;
                        -moz-transition: all ease 0.4s;
                        -ms-transition: all ease 0.4s;
                        -o-transition: all ease 0.4s;
                        transition: all ease 1s;
                        padding: 10px 10px 15px 10px;
                        -webkit-border-radius: 2px;
                        -moz-border-radius: 2px;
                        border-radius: 2px;
                        >div>.cityright{
                            width: 55%;
                        }
                        >div>.cityleft{
                            width: 45%;
                        }
                        >div>div{
                            float: left;
                            width: 50%;
                            -webkit-box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            box-sizing: border-box;
                            .rightbglan{
                                width: 7px;
                                height: 14px;
                                background: url("../assets/img/right.png") no-repeat center;
                                background-size: 100%;
                                border:0;
                                top: 7px;
                            }
                        }
                        >div>div:first-child{
                            border-right: 1px solid #fff;
                            li{
                                line-height: 30px;
                                text-align: left;
                            }
                            a{
                                line-height: 25px;
                                font-size: 14px;
                                margin-left: 0;
                                height: auto;
                                color: white;
                            }
                        }
                        >p{
                            text-align: center;
                            font-size: 14px;
                            height: 30px;
                            line-height: 30px;
                        }
                        position: absolute;
                        top: 60px;
                        width: 280px;
                        background-color: #000;
                        color: white;
                        right:0;
                    }
                    // position: relative;
                    cursor: pointer;
                    height: 55px;
                    margin-top: 25px;
                    margin-left: 15px;
                    .icon{
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        float: left;
                        background: url("../assets/img/lang.png") no-repeat center;
                    }
                    span{
                        float: right;
                        height: 30px;
                        line-height: 30px;
                    }
                    font-size: 20px;
                }
                .city:hover .chouselange{
                    display: block;
                    Z-index: 100;
                    opacity: 1;
                }
                .search{
                    width: 200px;
                    position: relative;
                    border: 1px solid #fff;
                    height: 30px;
                    margin-top: 25px;
                    .icon{
                        width: 30px;
                        height: 30px;
                        display: inline-block;
                        float: right;
                        background: url("../assets/img/search.png") no-repeat center;
                        background-size: 60%;
                        cursor: pointer;
                    }
                }
            }
            .right input{
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                padding-left: 8px;
                width: 170px;
                height: 30px;
                float: left;
                font-size: 16px;
                color: white;
            }
            font-size: 0;
            line-height: 80px;
            img{
                display: inline;
            }
            a{
                display: inline;
                vertical-align:middle;
                height: 30px;
                line-height: 30px;
                margin-top: 5px;
                font-size: 25px;
                color: white;
                margin-left: 55px;
                padding-bottom: 10px;
                padding-top: 3px;
                position: relative;
                i{
                    border: 1px solid #f36a22;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    color: #f36a22;
                    display: inline-block;
                    position: absolute;
                    height: 15px;
                    line-height: 15px;
                    text-align: center;
                    width: 30px;
                    font-style: normal;
                    top: -4px;
                    right: -40px;
                    font-size: 12px;
                }
            }
            a.router-link-exact-active{
                color: #f36a22;
                position: relative;
            }
            a.router-link-exact-active:after{
                content: ' ';
                font-size:0;
                height: 1px;
                width: 75%;
                position: absolute;
                left: 50%;
                bottom: 0;
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                transform: translateX(-50%);
                background-color: white;
            }
        }
    }
</style>
