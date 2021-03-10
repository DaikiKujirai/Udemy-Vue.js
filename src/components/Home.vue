<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) { // trueかfalseを返す
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
      el.style.boxShadow = "0 3px 6px rgba(0, 0, 0 , 0.26)"
      }
    }
  }
}

</script>