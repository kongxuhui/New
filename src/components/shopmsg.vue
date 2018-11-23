<template>
    <div class="shopmsg min-width">
        <ul>
            <li v-for="(item,index) in productList" :key="index">
                <div v-if="index/2 === 0" class="width msg-box clearfix">
                    <div class="left img-box">
                        <img v-bind:src="item.sale_img"/>
                    </div>
                    <div class="right text-box">
                        <h2>{{item.size}}</h2>
                        <h2>{{item.name}}</h2>
                        <div class="text">
                            <p>{{item.descript}}</p>
                        </div>
                        <div class="btn-box">
                            <a href="javascript:;" class="blue">Amazon <b>&raquo;</b></a>
                            <a href="javascript:;">AliExpress <b>&raquo;</b></a>
                            <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a>
                        </div>
                    </div>
                </div>
                <div v-else class="width msg-box clearfix">
                    <div class="left text-box">
                        <h2>{{item.size}}</h2>
                        <h2>{{item.name}}</h2>
                        <div class="text">
                            <p>{{item.descript}}</p>
                        </div>
                        <div class="btn-box">
                            <a href="javascript:;" class="blue">Amazon <b>&raquo;</b></a>
                            <a href="javascript:;">AliExpress <b>&raquo;</b></a>
                            <a href="javascript:;" @click="handleMore(item.id)">查看更多 <b>&raquo;</b></a>
                        </div>
                    </div>
                    <div class="right img-box">
                        <img v-bind:src="item.sale_img"/>
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

    .btn-box .blue{
        color: white;
        background-color: #000;
    }
    .btn-box>a{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        height: 30px;
        line-height: 26px;
        padding: 0 8px;
        font-size: 18px;
        margin-right: 20px;
        color: #000;
        overflow: hidden;
        >b{
            display: inline-block;
            font-size: 24px;
            font-weight: 200;
            -webkit-transform: translateY(1px);
            -moz-transform: translateY(1px);
            -ms-transform: translateY(1px);
            -o-transform: translateY(1px);
            transform: translateY(1px);
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
        width: 49%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .msg-box>.img-box{
        text-align: center;
        float: left;
    }
    .msg-box>.img-box>img{
        max-width: 500px;
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
            }
        }
        .shopmsg li{
            padding-top: 2.5rem;
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
                    font-size: 1.4rem;
                    height: 3.5rem;
                    line-height: 3.5rem;
                    background-color: #000;
                }
                .btn-box>a:not(.blue){
                    margin-top: 0.6rem;
                    display: inline-block;
                    width: 47%;
                    color: white;
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
    }
</style>
