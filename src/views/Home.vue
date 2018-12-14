<template>
  <div class="home">
      <navigation v-if="$store.state.ispc"></navigation>
      <mo-navigation v-if="!$store.state.ispc"></mo-navigation>
      <banner :banner-list="bannerList"></banner>
      <shopmsg :product-list="productList"></shopmsg>
      <div class="allshop min-width">
          <div class="width">
            <a href="javascript:;" class="allshop-smallbox" @click="handleGetAll()">
                <img src="../assets/img/allshop.png"/>
                <h2>查看所有商品</h2>
            </a>
          </div>
          
          <!-- <div class="allshop-smallbox" @click="handleGetALl()">
              <img src="../assets/img/allshop.png"/>
              <h2>查看所有商品</h2>
          </div> -->
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
          url_1: 'user/visit',          
          bannerList: [],
          productList: [],
      }
    },
    methods:{
        queryCallBack(data) {
            this.bannerList = data.data.banner || [];
            this.productList = data.data.product_list || [];            
        },
        handleGetAll(){
            this.$router.push('/goods');
        }
    },
    created() {
        this.getData(this.url);
        this.$http.get(this.url_1);       
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
            height: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .allshop-smallbox{
                height: 1.8rem;
                margin-top:0;
                /*padding: 0.01rem;*/
                img{
                    width: 2rem;
                    height: 2rem;   
                }
            }
        }
        .allshop h2{
            font-size: 1.6rem;
        }
    }
</style>
