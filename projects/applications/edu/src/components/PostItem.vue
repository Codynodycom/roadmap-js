<template>
  <div class="post">
    <div>
      <div><strong>{{ post.title }}</strong></div>
      <div><strong></strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
          @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.post:hover {
  box-shadow: teal 0px 0px 5px 1px;
  /*border: 2px solid white;*/
}

div {
  margin: 10px;
}
.post__btns {
  display: flex;
}
</style>