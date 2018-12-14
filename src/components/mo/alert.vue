<template>
    <div class="alert">
        <div class="close"><img src="../../assets/img/close.png" @click="close()"/></div>
        <h2>{{$t('message.Chaozhekou')}}</h2>
        <h2>{{$t('message.Zhekouma')}}</h2>
        <div v-show="flag_2" class="input"><input v-model="input1" type="email" placeholder="@输入你的邮箱"/></div>
        <p v-show="flag">邮箱格式有误，请重新输入。</p>
        <div v-show="flag_2" class="btn"><a href="javascript:;" @click="handlePost()">{{$t('message.confirmsubscription')}}</a></div>
        <div class="tip" v-show="flag_1">{{$t('message.Tip')}}</div>
        <div class="btn" @click="handleFlag()" v-show="flag_1">
            <a href="javascript:;">{{$t('message.Sure')}}</a>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "alert",
        data(){
            return{
                url:'user/add',
                input1:'',
                flag: false,
                flag_1: false,
                flag_2: true,
                flag_3: true,                
            }
        },
        methods:{
            close(){
                this.$emit('closeM',false)
            },
            handleFlag(){
                this.$emit('getFlag',this.flag_3);
                this.flag_1 = false;                                           
            },
            handlePost(){
                this.$http.post(this.url,{
                    email: this.input1,
                    lang: this.getCookie('lang')
                }).then(data => {
                    if(data.success){
                        this.flag_2 = false;
                        this.flag_1 = data.success;
                    }else{
                        this.flag = true;
                        setTimeout( () => {
                            this.flag = false;                          
                        }, 2000);                                                
                    }
                })
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