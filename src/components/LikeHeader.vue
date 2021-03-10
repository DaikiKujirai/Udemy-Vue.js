<template>
  <div>
    <slot></slot>
    <!--v-bind:user  -->
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot></slot>
  </div>
</template>

<script>

export default {
  deta() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    };
  }
};

</script>
