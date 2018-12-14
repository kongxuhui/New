<template>
    <header class="min-width">
        <div class="header_box clearfix width">
            <div class="left">
                <!-- <router-link to="/"><img src="../assets/img/logo.png" width="206" height="30" alt=""></router-link> -->
                <a href="/"><img src="../assets/img/logo.png" width="206" height="30" alt=""></a>
                <router-link to="/" class="active">{{$t('message.onlineshoppingmall')}}</router-link>
                <router-link to="/aboutcompany">{{$t('message.aboutcompany')}}</router-link>
                <router-link to="/discount">{{$t('message.Latestdiscount')}}<i>{{$t('message.discount')}}</i></router-link>
            </div>
            <div class="right clearfix">
                <div class="search"><input type="text" v-model="searchname"/><i class="icon"></i></div>
                <!-- <div class="city"><i class="icon"></i><span>{{select.langSel}}-{{select.countrySel}}</span> -->
                <div class="city"><i class="icon"></i><span>{{select.langSel}}</span>                
                    <div class="chouselange">
                        <p>请选择你的站点</p>
                        <div class="clearfix">
                            <div class="cityleft">
                                <ul>
                                    <li @click="tab(item,index)" v-for="(item,index) in countryList" :key="index">
                                        <a href="javascript:;">{{item.name_lang}}
                                            <i :class="isAdded == index?'rightbglan':'rightbglan_1'"></i> 
                                        </a>
                                    </li>                                  
                                </ul>
                            </div>
                            <div class="cityright" v-for="(item,index) in countryList" :key="index">
                                <span><img :src="item.nationalFlag" width="25"/></span>                                
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
                searchname: '',
                url: 'user/switch_lang',
                isAdded: 0,
                select: {
                    langSel: '简体中文',
                    countrySel: '中国'
                },
                countryList:[
                    {name: '中国', nationalFlag: require('@/assets/img/CHS.png'), lang: 'CHS', name_lang: '简体中文'},
                    {name: '英国', nationalFlag: require('@/assets/img/EN.png'), lang: 'EN', name_lang: 'English'},
                    {name: '西班牙', nationalFlag: require('@/assets/img/ES.png'), lang: 'ES', name_lang: 'Spanish'},
                    {name: '法国', nationalFlag: require('@/assets/img/FRA.png'), lang: 'FRA', name_lang: 'French'},
                    {name: '德国', nationalFlag: require('@/assets/img/DE.png'), lang: 'DE', name_lang: 'German'},
                    {name: '日本', nationalFlag: require('@/assets/img/JP.png'), lang: 'JP', name_lang: 'Japanese'},
                    {name: '俄罗斯', nationalFlag: require('@/assets/img/RU.png'), lang: 'RU', name_lang: 'Russian'}                
                ]             
            }
        },
        methods:{
            queryCallBack(data) {
                // this.discountList = data.data.list || {};
            },
            tab(country,idx){
                this.setCookie('lang',country.lang,365);
                this.setCookie('isAdded',idx,365);
                this.setCookie('langSel',country.name_lang,365);
                this.setCookie('countrySel',country.name,365);              
                this.isAdded = idx;
                this.$http.get(this.url,{default_language: country.lang}).then((data) => {
                    location.reload();
                })
            },
        },
        created() {
            if(this.getCookie('isAdded')){
                this.isAdded = this.getCookie('isAdded');
            }
            if(this.getCookie('lang')){
                this.$i18n.locale = this.getCookie('lang');
            }
            if(this.getCookie('langSel')){
                this.select.langSel = this.getCookie('langSel');     
                this.select.countrySel = this.getCookie('countrySel');                                   
            }   
        },
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
            // padding: 0 5px;
            // margin: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width:1280px;
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
                    position: relative;
                    .chouselange{
                        display: none;
                        opacity: 0;
                        // z-index: -1;
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
                            width: 30%;
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
                            .rightbglan_1{
                                width: 7px;
                                height: 14px;
                                border:0;
                                top: 7px;
                            }
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
                        top: 55px;
                        width: 280px;
                        background-color: #000;
                        color: white;
                        right: 0px;
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
                    width: 160px;
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
                width: 126px;
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
                    border: 2px solid #f36a22;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 5px;
                    border-radius: 4px;
                    color: #f36a22;
                    display: inline-block;
                    position: absolute;
                    height: 15px;
                    line-height: 15px;
                    text-align: center;
                    font-style: normal;
                    top: 5px;
                    right: -33px;
                    font-size: 12px;
                    border: 1px solid #f36a22;
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
