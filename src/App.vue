// シングルファイルコンポーネント
// vueファイルとはインポートをしたら最終的にコンポーネントのオブジェクトになるもの

<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <div style="padding: 10rem;">

      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>

      <lavel for="maxNumber">最大人数</lavel>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{typeof eventData.maxNumber}}</p>

      <lavel for="host">主催者</lavel>
      <input id="host" type="text" v-model.trim="eventData.host">
      <p>{{typeof eventData.host}}</p>

      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <lavel for="10">10代</lavel>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <lavel for="20">20代</lavel>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <lavel for="30">30代</lavel>
      <p>{{eventData.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <lavel for="free">無料</lavel>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <lavel for="paid">有料</lavel>

      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"

export default {
  data() {
    return {
      number: 14,
      currentComponent: 'Home',
      locations: ["東京","大阪","名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,  //boolean
        target: [],
        price: "無料",
        location: "東京"
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
};
</script>