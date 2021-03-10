import Vue from 'vue'
import App from './App.vue'
// コンポーネントのオブジェクトをインポートする。
// Appはコンポーネントのオブジェクトになる
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  // 第一引数:名前 第二引数:関数
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
