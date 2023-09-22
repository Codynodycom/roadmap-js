<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-focus
        v-model="post.title"
        placeholder="Название"
    ></my-input>
    <my-input
        v-model="post.body"
        placeholder="Описание"
    ></my-input>
    <my-button
        @click="createPost"
    >
    </my-button>
  </form>
</template>

<script>

export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>