<template>
  <postsList :counter="counter">
    <div class="wrapper">
      <button class="btn btn-dark mt-3" @click="onLoadMore">Load More...</button>
    </div>
  </postsList>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import postsList from './postsFolder/postsList.vue'


const counter = ref(0)

const onLoadMore = () => {
  counter.value += 1
}


</script>

<style scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>