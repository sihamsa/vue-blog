<template>
  <div class="posts">
    <h3>Daily Digest</h3>
    <PostItem v-for="post in props.posts" :key="post.slug" :post="post" />
  </div>
</template>
<script setup lang="ts">
import PostItem from "./PostItem.vue";

// eslint-disable-next-line
const props = defineProps({
  posts: {
    required: true,
    type: Object,
  },
});
</script>

<style>
.posts {
  background-color: rgba(242, 244, 247, 1);
  padding: 30px;
  /* text-align: center; */
}
</style>
