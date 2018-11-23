<template>
    <div class="alert">
        <div class="close"><img src="../../assets/img/close.png" @click="close()"/></div>
        <h2>超抵扣专区  仅限订阅用户使用</h2>
        <h2>输入邮箱订阅  即刻获取超低折扣码</h2>
        <div class="input"><input type="email" placeholder="@输入你的邮箱"/></div>
        <div class="btn"><a href="javascript:;">确认订阅</a></div>
    </div>
</template>

<script>
    export default {
        name: "alert",
        data(){
            return{

            }
        },
        methods:{
            close(){
                this.$emit('closeM',false)
            }
        }
    }
</script>

<style scoped lang="less">
    .alert{
        position: fixed;
        top: 45%;
        left: 50%;
        width: 90%;
        z-index: 60;
        background-color: rgba(0,0,0,.8);
        -webkit-transform: translateY(-50%) translateX(-50%);
        -moz-transform: translateY(-50%) translateX(-50%);
        -ms-transform: translateY(-50%) translateX(-50%);
        -o-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        h2{
            color: white;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 500;
            padding: 0.3rem 0;
        }
        .input{
            width: 80%;
            background-color: white;
            margin: 1.2rem auto;
            input{
                height: 2.2rem;
                width: 100%;
                font-size: 0.95rem;
                padding-left: 0.5rem;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
        .btn{
            text-align: center;
            padding-bottom: 1.5rem;
            a{
                display: inline-block;
                padding: 0 1.8rem;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                letter-spacing: 0.3rem;
                font-size: 1.2rem;
                color: white;
                background-color: #f36a22;
                height: 2rem;
                line-height: 2rem;
            }
        }
        .close{
            text-align: right;
            padding: 0.3rem 0.2rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            img{
                width: 1.8rem;
            }
        }
    }
</style>