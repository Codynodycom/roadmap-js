<template>
  <div class="navbar">
    <div @click="$router.push('/')">By Youjin Tyan</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/blog')">Блог</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightblue;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  margin-right: 5px;
}
</style>