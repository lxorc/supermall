<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in titles" 
              class="center-item"
              :class="{active: index === currentIndex}"
              @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  props: {},
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  },
  computed: {},
}
</script>

<style scoped>
.left img{
  vertical-align: middle;
}
.center {
  display: flex;
  font-size: 14px;
}

.center-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
