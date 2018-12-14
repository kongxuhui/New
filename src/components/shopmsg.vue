<template>
    <div class="shopmsg min-width">
        <ul>
            <li v-for="(item,index) in productList" :key="index">
                <div v-if="index/2 === 0 && $store.state.ispc" class="width msg-box clearfix">
                    <div class="left img-box">
                        <img v-bind:src="item.img"/>
                    </div>
                    <div class="right text-box">
                        <h2>{{item.size}}</h2>
                        <h2>{{item.name}}</h2>
                        <div class="text">
                            <p>{{item.descript}}</p>
                        </div>
                        <div class="btn-box" v-if="$store.state.ispc">
                            <a v-bind:href="item.sale_url">Amazon<b>&raquo;</b></a>
                            <a href="javascript:;">AliExpress<b>&raquo;</b></a>
                            <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a>
                            <!-- <a href="javascript:;">AliExpress <b>&raquo;</b></a> -->
                            <!-- <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a> -->
                        </div>
                    </div>
                </div>
                <div v-if="index/2 != 0 && $store.state.ispc" class="width msg-box clearfix">
                    <div class="left text-box">
                        <h2>{{item.size}}</h2>
                        <h2>{{item.name}}</h2>
                        <div class="text">
                            <p>{{item.descript}}</p>
                        </div>
                        <div class="btn-box" v-if="$store.state.ispc">
                            <a v-bind:href="item.sale_url">Amazon <b>&raquo;</b></a>
                            <a href="javascript:;">AliExpress<b>&raquo;</b></a>
                            <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a>                            
                            <!-- <a href="javascript:;">AliExpress <b>&raquo;</b></a> -->
                            <!-- <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a> -->
                            <!-- <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a> -->
                        </div>
                    </div>
                    <div class="right img-box">
                        <img v-bind:src="item.img"/>
                    </div>
                </div>
                <div class="width msg-box clearfix" v-if="!$store.state.ispc">
                    <div class="left img-box">
                        <img v-bind:src="item.img"/>
                    </div>
                    <div class="right text-box">
                        <h2>{{item.size}}</h2>
                        <h2>{{item.name}}</h2>
                        <div class="text">
                            <p>{{item.descript}}</p>
                        </div>
                        <div class="btn-box" v-if="!$store.state.ispc">
                            <a href="javascript:;" @click="handleMore(item.id)">查看更多<b>&raquo;</b></a>
                            <a v-bind:href="item.sale_url">Amazon</a>
                            <a href="javascript:;">AliExpress</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['productList'],
        name: "shopmsg",
        data(){
            return{
                // p_id:'2',
            }
        },
        methods:{
            handleMore(data){
                this.$router.push({path: 'special', query: { id: data }});
            }
        }
    }
</script>

<style scoped lang="less">

    
    // .btn-box>a:hover{
    //     background-color: red;
    // }
    .btn-box>a{
        padding: 0.5em 2em;
        border: none;
        z-index: 1;
        color: #000;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        min-width: 140px;
        // line-height: 30px;
        font-size: 18px;
        margin-right: 20px;
        overflow: hidden;
        position: relative;
        -webkit-transition: border-color 0.5s, color 0.5s;
        transition: border-color 0.5s, color 0.5s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 150%;
            height: 100%;
            background-color:#000;
            z-index: -1;
            -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
            transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            -webkit-transition: -webkit-transform 0.5s, opacity 0.5s, background-color 0.5s;
            transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
        }
        &:hover{
            color: #fff;
            border-color:#000;
        }
        &:hover::before {
            opacity: 1;
            background-color:#000;
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
    }
    .text-box{
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        -ms-transform: translateY(-10px);
        -o-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .text{
        font-size: 18px;
        padding-top:5px;
        min-height: 220px;
        overflow: hidden;
    }
    .text>p{
        text-indent: 2em;
        color: #666;
        margin-bottom: 4px;
    }
    .msg-box h2{
        font-size: 40px;
        font-weight: 700;
        color: #262626;
    }
    .msg-box>div{
        overflow: hidden;
        width: 620px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .msg-box>.img-box{
        text-align: center;
        float: left;
    }
    .msg-box>.img-box>img{
        width: 620px;
        height: 488px;
    }
    .msg-box>.left{
        float: left;
    }
    .msg-box>.right{
        height: 100%;
        float: right;
    }
    .msg-box{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .shopmsg{
        li{
            padding: 60px 0;
            font-size: 0;
            background-color: white;
        }
        li:nth-child(even){
            background-color: #f0efef;
        }
    }
    @media screen and (max-width: 768px) {
        .msg-box>div.left,.msg-box>div.right {
            float: none;
            width: 100%;
        }
        .msg-box .img-box{
            text-align: center;
            img{
                width: 80%;
                min-width: auto;
                height: auto;
            }
        }
        .shopmsg li{
            padding-top: 2.5rem;
            padding-bottom: 20px;
        }
        .msg-box{
            .text-box{
                text-align: center;
                padding-top: 2rem;
                padding-left: 1.2rem;
                padding-right: 1.2rem;
                >div.text{
                    text-align: left;
                    padding: 0 1.2rem;
                }
                .btn-box>a{
                    display: block;
                    margin-right: 0;
                    padding: 0;
                    font-size: 1.2rem;
                    height: 1.8rem;
                    line-height: 1.8rem;
                    background-color: #000;
                    &::before,
                    &::after{
                        display: none;
                    }
                }
                .btn-box>a:not(.blue){
                    margin-top: 0.6rem;
                    display: inline-block;
                    width: 47%;
                    color: white;
                }
                .btn-box>a:nth-child(1){
                    width: 100%;
                    letter-spacing:6px;
                }
                .btn-box>a:nth-child(2){
                    margin-right: 3%;
                }
                .btn-box>a:nth-child(3){
                    margin-left: 3%;
                }
                h2{
                    display: inline;
                    font-size: 2rem;
                    padding-bottom: 0.5rem;
                    padding-top: 1.6rem;
                }
            }
        }
        .button--tamaya {
        overflow: hidden;
        color: #7986cb;
        min-width: 180px;
    }

    }
</style>
