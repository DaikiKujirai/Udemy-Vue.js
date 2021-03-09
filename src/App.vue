// シングルファイルコンポーネント
// vueファイルとはインポートをしたら最終的にコンポーネントのオブジェクトになるもの

<template>
  <div>
    <LikeHeader :number="6"></LikeHeader>
    <LikeNumber :number="14"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import LikeNumber from './components/LikeNumber.vue'

export default {
  components: {
    LikeHeader,
    LikeNumber
  }
}
</script>
