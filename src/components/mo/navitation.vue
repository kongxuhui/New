<template>
    <header class="header">
        <img src="../../assets/img/mo-nav.png" alt="" class="menu"  @click="show = !show">
        <img src="../../assets/img/mo-logo.png" class="logo"/>
        <img src="../../assets/img/mo-search.png" class="search"/>
        <transition name="fade">
            <ul class="nav" v-show="show">
                <li><router-link to="/">{{$t('message.shoppingmallhome')}}</router-link></li>                
                <li><router-link to="/">{{$t('message.onlineshoppingmall')}}</router-link></li>
                <li><router-link to="/aboutcompany">{{$t('message.aboutcompany')}}</router-link></li>
                <li><router-link to="/Latestdiscount">{{$t('message.Latestdiscount')}}</router-link></li>
                <!-- <li @click="tab(item,index)" v-for="(item,index) in countryList" :key="index"> -->
                <li>                    
                    <div><img :src="select.nationalFlag">  {{select.langSel}}-{{select.countrySel}}</div>
                    <span @click="handelshow()"><img src="../../assets/img/right_lang.png"></span>
                </li>
            </ul>
        </transition>
        <transition name="fade">
            <ul v-show="show_1" class="lang">
                <li v-for="(item,index) in countryList" :key="index" @click="item.isSubShow = !item.isSubShow">
                    {{item.name_lang}}
                    <transition name="fade">
                        <ul v-show="item.isSubShow" class="country">
                            <li @click="tab(item,item_1,index)" v-for="(item_1,index) in item.name" :key="index">{{item_1}}</li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </transition>
    </header>
</template>

<script>
    export default {
        name: "navitation",
        data(){
            return{
                show: false,
                show_1: false,    
                show_2: false,      
                select: {
                    langSel: '简体中文',
                    countrySel: '中国',
                    nationalFlag: '../../assets/img/CHS.png'
                },                                      
                countryList:[
                    {name: ['中国'], isSubShow:false, nationalFlag: require('@/assets/img/CHS.png'), lang: 'CHS', name_lang: '简体中文'},
                    {name: ['英国','美国'], isSubShow:false, nationalFlag: require('@/assets/img/EN.png'), lang: 'EN', name_lang: 'English'},
                    {name: ['西班牙'], isSubShow:false, nationalFlag: require('@/assets/img/ES.png'), lang: 'ES', name_lang: 'Spanish'},
                    {name: ['法国'], isSubShow:false, nationalFlag: require('@/assets/img/FRA.png'), lang: 'FRA', name_lang: 'French'},
                    {name: ['德国'], isSubShow:false, nationalFlag: require('@/assets/img/DE.png'), lang: 'DE', name_lang: 'German'},
                    {name: ['日本'], isSubShow:false, nationalFlag: require('@/assets/img/JP.png'), lang: 'JP', name_lang: 'Japanese'},
                    {name: ['俄罗斯'], isSubShow:false, nationalFlag: require('@/assets/img/RU.png'), lang: 'RU', name_lang: 'Russian'},                    
                ], 
            }
        },
        methods:{
            queryCallBack(data) {
                // this.discountList = data.data.list || {};
            },
            tab(country,country_1,idx){
                this.setCookie('lang',country.lang,365);
                this.setCookie('langSel',country.name_lang,365);
                this.setCookie('countrySel',country_1,365);
                this.setCookie('nationalFlag', country.nationalFlag,365);
                this.$router.go(0);
                this.$http.get(this.url,{default_language: country.lang}).then((data) => {
                    // this.router.go(0);
                })
            },
            handelshow(){
                this.show_1 = !this.show_1;
            },
        },
        created(){
            if(this.getCookie('lang')){
                this.$i18n.locale = this.getCookie('lang');
            }
            if(this.getCookie('langSel')){
                this.select.langSel = this.getCookie('langSel');     
                this.select.countrySel = this.getCookie('countrySel'); 
                this.select.nationalFlag = this.getCookie('nationalFlag');                                                                                     
            } 
        }
    }
</script>

<style scoped lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    header{
        .lang{
            position: absolute;
            z-index: 100;
            left: 11.6rem;
            top: 2.6rem;
            width: 6rem;
            padding: 0.5rem 0.6rem;
            background-color: #000;
            li:last-child{
                border-bottom: 0;
            }
            li{
                padding-top: 0.8rem;
                padding-bottom: 0.5rem;
                text-indent: 0.4rem;
                border-bottom: 1px solid #919191;
                color: #ccc;
                .country{
                    li{
                        border-bottom: 0px solid #919191;
                    }
                    li:last-child{
                        border-bottom: 0;
                    }
                }
            }
        }
        position: relative;
        background-color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.7rem 0.8rem;
        .nav{
            position: absolute;
            z-index: 100;
            left: 0;
            top: 2.6rem;
            width: 10.4rem;
            padding: 0.5rem 0.6rem;
            background-color: #000;
            li{
                padding-top: 0.8rem;
                padding-bottom: 0.5rem;
                text-indent: 0.4rem;
                border-bottom: 1px solid #919191;
                color: #ccc;
                .icon{
                    width: 1.3rem;
                    height: 1.3rem;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                    overflow: hidden;
                    display: inline-block;
                    background: url("../../assets/img/chain.png") no-repeat left 0.02rem;
                    background-size: 200%;
                    vertical-align: middle;
                }
                
            }
            li:last-child{
                border-bottom: 0;
                div{
                    overflow: hidden;
                    float: left;
                    text-align: center;
                    vertical-align: middle;
                    img{
                        width: 1.2rem;
                        height: 1.2rem;
                    }
                }
                span:nth-child(2){
                    float: right;
                }
            }
            a{
                color: #ccc;
                font-size: 0.95rem;
                display: block;
            }
        }
        img{
            height: 1.5rem;
        }
    }
</style>
