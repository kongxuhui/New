<template>
    <footer class="min-width">
        <div class="footer clearfix width">
            <div class="left">
                <ul class="clearfix">
                    <li>
                        <router-link to="/">{{$t('message.contactus')}}</router-link>
                        <router-link to="/">{{$t('message.account')}}</router-link>
                        <router-link to="/">{{$t('message.frequentlyaskedquestions')}}</router-link>
                        <router-link to="/">{{$t('message.Productsetup')}}</router-link>
                        <router-link to="/">{{$t('message.Guarantee')}}</router-link>
                        <router-link to="/">{{$t('message.Orderstatus')}}</router-link>
                    </li>
                    <li>
                        <router-link to="/">{{$t('message.Customizedproducts')}}</router-link>
                        <router-link to="/">{{$t('message.Bulkorder')}}</router-link>
                        <router-link to="/">{{$t('message.Studentdiscount')}}</router-link>
                        <router-link to="/">{{$t('message.Contactnumber')}}</router-link>
                    </li>
                    <li>
                        <router-link to="/">{{$t('message.Ourstory')}}</router-link>
                        <router-link to="/">{{$t('message.Bornincomputer')}}</router-link>
                        <router-link to="/">{{$t('message.pressrelease')}}</router-link>
                        <router-link to="/">{{$t('message.recruit')}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="right">
                <ul class="clearfix">
                    <li><a href="javascript:;"><img src="../assets/img/img.png"/></a></li>
                    <li><a href="javascript:;"><img src="../assets/img/video.png"/></a></li>
                    <li><a href="javascript:;"><img src="../assets/img/facebook.png"/></a></li>
                    <li><a href="javascript:;"><img src="../assets/img/flyb.png"/></a></li>
                </ul>
            </div>
        </div>
        <div class="copy">
            <div class="width clearfix">
                <div class="fl">{{$t('message.PrivacyPolicyApplicableProvisions')}}</div>
                <div class="fr">&copy;{{$t('message.ShenLianchuangReservedAllRights')}}</div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footerd",
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
    footer{
        background-color: #000;
        color: #666;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .copy{
        border-top: 2px solid #fff;
        font-size: 12px;
        line-height: 45px;
        >div{
            padding: 0 40px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
    .footer{
        padding: 15px 40px 7px 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 12px;
        >.left{
            float: left;
            width: calc(100% - 350px);
        }
        >.right{
            float: right;
            width: 350px;
            height: 100%;
            ul{
                line-height: 70px;
                text-align: right;
            }
            li{
                margin: 0 15px;
                display: inline-block;
                width: auto;
            }
        }
        li{
            float: left;
            margin-right: 45px;
            width: 120px;
        }
        li>a{
            margin: 15px 0;
            display: block;
            color: #666;
        }
        li>a:hover{
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 768px) {
        .footer ul{
            padding: 0 1.2rem;
            display: flex!important;
            justify-content: space-around!important;
        }
        .footer>div{
            float: none!important;
            width: 100%!important;
            a{
                font-size: 0.9rem;
            }
        }
        .footer li{
            margin-right: 0;
            float: none;
            /*width: 33%;*/
        }
        .copy{
            font-size: 0.9rem;
            padding: 0 1.2rem;
        }
    }
</style>
