<template>
  <input type="text" :value="inputValue" @change="onInputCallback" />
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref("");
function onInputCallback() {
  console.log("执行");
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
