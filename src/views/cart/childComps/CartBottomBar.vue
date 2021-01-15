<template>
  <div class="bottom-bar">
    <div class="checked-all">
      <check-button class="check-button"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计: {{totalPrice}}  </span>
    </div>
    <div class="calculate">
      去计算({{checkedCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import {mapGetters} from 'vuex';

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'productList'
    }),
    totalPrice() {
      return '￥' + this.list.filter(item => {
        return item.checked
      }).reduce((proValue,item) => {
        return proValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedCount() {
      return this.list.filter(item => item.checked).length
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}

.checked-all {
  display: flex;
  align-items: center;
  width: 100px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 15px;
  margin-right: 15px;
}

.total-price {
  flex: 1;
}

.calculate {
  width: 100px;
  font-size: 14px;
  text-align: center;
  background-color: #FF5300;
  color: #fff;
}
</style>
