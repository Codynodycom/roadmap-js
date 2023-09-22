<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <TransitionGroup
        name="post-list"
        tag="div"
    >
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else style="color: red">
    Список постов пуст
  </h2>
</template>

<script>
import postItem from "./PostItem.vue";
export default {
  components: {
    postItem
  },
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
div {
  max-width: 700px;
  margin-top: 50px;
}
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-leave-active {
  position: absolute;
}
</style>