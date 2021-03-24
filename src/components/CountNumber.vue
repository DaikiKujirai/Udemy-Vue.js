<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"; //srcから始まるtokyoNumber

export default {
  mixins: [tokyoNumber],
  created() {
    
  }
};

</script>