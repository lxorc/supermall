<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {},
  created() {},
  mounted() {
    console.log(BScroll);
    this.scroll = new BScroll(this.$refs.wrapper,{
    })
  },
  methods: {
    
  },
  components: {}
}
</script>

<style scoped>
</style>
