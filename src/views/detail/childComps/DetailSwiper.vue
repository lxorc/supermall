<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in itemImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  data() {
    return {}
  },
  props: {
    itemImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    Swiper,
    SwiperItem
  },
  computed: {},
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}

</style>
