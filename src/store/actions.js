import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'

export default {
  addCart(context, payload) {
    // ?做法1: 
    /* 
    let oldProduct = null;
    for (let product of state.goodsList) {
      if (payload.iid === product.iid) {
        oldProduct = product;
      }
    }
    if (oldProduct) {
      oldProduct.count += 1;
    }else {
      payload.count = 1;
      state.goodsList.push(payload);
    } 
    */
    // ?做法2:
    let product = context.state.goodsList.find((item) => item.iid === payload.iid);
    if (product) {
      context.commit(ADD_COUNTER, product);
    } else {
      payload.count = 1;
      payload.checked = true;
      context.commit(ADD_TO_CART, payload);
    }
  }
}