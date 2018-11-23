<template>
    <header class="header">
        <img src="../../assets/img/mo-nav.png" alt="" class="menu"  @click="show = !show">
        <img src="../../assets/img/mo-logo.png" class="logo"/>
        <img src="../../assets/img/mo-search.png" class="search"/>
        <transition name="fade">
            <ul class="nav" v-show="show">
                <li><router-link to="/">商场首页</router-link></li>
                <li><router-link to="/special">产品专题</router-link></li>
                <li><router-link to="/">产品特色</router-link></li>
                <li><router-link to="/aboutcompany">关于公司</router-link></li>
                <li> <i class="icon"></i> 中文-中国</li>
            </ul>
        </transition>
    </header>
</template>

<script>
    export default {
        name: "navitation",
        data(){
            return{
                show: false
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
            width: 55%;
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
