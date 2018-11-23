<template>
    <div class="alert">
        <p class="close"><img src="../assets/img/close.png" @click="close()"/></p>
        <h2>{{$t('message.Chaozhekou')}}</h2>
        <h2>{{$t('message.Zhekouma')}}</h2>
        <div class="input"><input type="email" placeholder="@输入你的邮箱"/></div>
        <div class="btn"><a href="javascript:;">{{$t('message.confirmsubscription')}}</a></div>
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
        top: 20%;
        /*-webkit-transform: translateX(-50%) translateY(-50%);*/
        /*-moz-transform: translateX(-50%) translateY(-50%);*/
        /*-ms-transform: translateX(-50%) translateY(-50%);*/
        /*-o-transform: translateX(-50%) translateY(-50%);*/
        /*transform: translateX(-50%) translateY(-50%);*/
        left: calc(50% - 250px);
        z-index: 50;
        width: 500px;
        background-color: rgba(0,0,0,.8);
        color: #e6e6e6;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        .btn{
            padding-top: 10px;
            padding-bottom: 20px;
            text-align: center;
            a{
                background-color: #f36a22;
                width: 145px;
                text-align: center;
                display: inline-block;
                color: white;
                font-size: 18px;
                letter-spacing: 4px;
                height: 33px;
                line-height: 33px;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
            }
        }
        h2{
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            padding: 5px 0;
        }
        .input{
            width: 380px;
            background-color: white;
            margin: 15px auto;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            overflow: hidden;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            input{
                padding-left: 8px;
                padding-right: 8px;
                background-color: #e6e6e6;
                height: 35px;
                width: 100%;
            }
        }
        .close{
            position: relative;
            height: 35px;
            img{
                display: inline-block;
                cursor: pointer;
                width: 35px;
                position: absolute;
                right: 2px;
                top: 3px;
                z-index: 55;
            }
        }
    }
</style>
