<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>

    <scroll class="content" ref="scroll">
      <detail-swiper :itemImages="itemImages"/>
      <detail-base-info :goods="goods"/> 
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
      <goods-list :goods="recommend"/>
    </scroll>
    
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail , Goods, Shop ,GoodsParam, getRecommend} from 'network/detail'
import { itemImgListener } from 'common/mixin'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      itemImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
    }
  },
  mixins: [itemImgListener],
  props: {},
  created() {
    // 1. 获取iid
    this.iid = this.$route.params.iid

    // 2. 请求详情页数据
    getDetail(this.iid).then(res => {
      // 0.获取数据
      const data = res.result;
      // 1.保存顶部轮播图的数据
      this.itemImages = data.itemInfo.topImages;

      // 2.保存产品信息的数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.保存商家的数据信息
      this.shopInfo = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.保存商品参数的数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);

      // 6.保存商品评论的信息
      this.commentInfo = data.rate;
    })

    // 3.请求推荐数据
    getRecommend().then( res => {
      this.recommend = res.data.list;
    })

  },
  mounted() {
    
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    }
  },
  destroyed () {
    this.$bus.$off('itemImageLoad',this.itemImgListener);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  computed: {},
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}

.content {
  height: calc(100% - 48px);
}

</style>
