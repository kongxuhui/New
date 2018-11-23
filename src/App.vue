<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                pc: true,
            }
        },
        methods:{
            ispc(screenWidth){
                if(screenWidth > 768){
                    this.$store.commit('increment',true)
                    require('./assets/css/pccommon.css')
                }else {
                    this.$store.commit('increment',false)
                    require('./assets/css/mocommon.css')                    
                }
            }
        },
        mounted(){
            let screenWidth = document.body.clientWidth + 18; // 滚动条的宽度
            this.ispc(screenWidth);
            window.onresize = () => {
                let screenWidth = document.body.clientWidth + 18; // 滚动条的宽度
                this.ispc(screenWidth);
            }
        },
    }
</script>
<style lang="less">
    @import './assets/css/common.css';
    // @import './assets/css/mocommon.css';
    // @import './assets/css/pccommon.css';    
</style>
