<template>
  <div>
    <label for="title">タイトル</label>
    <input id="title" type="text" :value="value" @input="$emit('input', $event.target.value)">
<!-- $event.target.value = input式で入力された内容 -->
<!-- これを'input'というカスタムイベント名で発火させる -->
<!-- いつ発火させるか inputタグの'input'が行われたとき -->
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
  export default {
    props: ["value"] //オブジェクトでも良い
  }
</script>