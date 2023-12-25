<template>
  <RouterLink :to="props.post.path" class="single-post">
    <div class="information">
      <p class="date">{{ props.post.published_at }}</p>
      <h2>
        {{ props.post.title }}
      </h2>
      <p class="content">
        {{ props.post.description }}
      </p>
    </div>
    <div class="picture">
      <img :src="props.post.image" alt="" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.single-post {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  padding: 30px 0px;
  padding-left: 25px;
  border-radius: 15px;
  background-color: white;
  margin: 50px 160px;
}
.information {
  padding-right: 15px;
}
.picture img {
  border-radius: 12px;
  padding-left: 30px;
}
.date {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  font-family: "Graphik-light";
  color: rgba(102, 112, 133, 1);
  text-align: start;
}
h2 {
  font-weight: 600;
  font-size: 26px;
  line-height: 33px;
  color: rgba(29, 41, 57, 1);
  font-family: "Graphik";
}
.content {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgba(71, 84, 103, 1);
  text-align: start;
}
</style>
