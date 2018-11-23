<template>
  <div class="home">
      <navigation v-if="$store.state.ispc"></navigation>
      <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
      <banner :banner-list="bannerList"></banner>
      <shopmsg :product-list="productList"></shopmsg>
      <div class="allshop min-width">
          <div class="allshop-smallbox">
              <img src="../assets/img/allshop.png"/>
              <h2>查看所有商品</h2>
          </div>
      </div>
      <allbanner></allbanner>
      <subscribe></subscribe>
      <footerd></footerd>
  </div>
</template>

<script>
// @ is an alias to /src

import navigation from '../components/navigation.vue'
import moNavigation from '../components/mo/navitation.vue'
import subscribe from '../components/subscribe.vue'
import footerd from '../components/footerd.vue'
import banner from '../components/banner.vue'
import shopmsg from '../components/shopmsg.vue'
import allbanner from '../components/allbanner.vue'

export default {
  name: 'home',
    data(){
      return{
          url: 'model_main_page/info',
          bannerList: [],
          productList: [],
      }
    },
    methods:{
        queryCallBack(data) {
            console.log(data)
            this.bannerList = data.data.banner || [];
            this.productList = data.data.product_list || [];            
        },
    },
    created() {
        this.getData(this.url);
    },
    mounted(){
    },
    components: {
        footerd,
        navigation,
        moNavigation,
        subscribe,
        banner,
        allbanner,
        shopmsg
    }
}
</script>

<style scoped lang="less">
    .allshop{
        background-color: #000;
        height: 120px;
        text-align: center;
        .allshop-smallbox{
            cursor: pointer;
            margin-top: 30px;
            padding: 8px;
            border: 1px solid #fff;
            height: auto;
            display: inline-block;
            letter-spacing: 2px;
            img{
                width: 50px;
                margin-right: 5px;
            }
        }
    }
    .allshop h2{
        font-weight: 500;
        font-size: 32px;
        color: white;
        display: inline-block;
        vertical-align: middle;
    }
    @media screen and (max-width: 768px) {
        .allshop{
            height: 6.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .allshop-smallbox{
                height: 3.2rem;
                margin-top:0;
                /*padding: 0.01rem;*/
                img{
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
        .allshop h2{
            font-size: 1.8rem;
        }
    }
</style>
