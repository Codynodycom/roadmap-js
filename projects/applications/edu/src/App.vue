<template>
  <nav-component></nav-component>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavComponent from "./components/UI/NavComponent.vue";
export default {
  components: {NavComponent}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  width: 100%;
  height: 100vh;
}
</style>
