<template>
  <div class="home">
    <div class="meet">👋 Meet Personally</div>
    <h1 class="text-principal">
      Minimal blog template for <br />creative expressions
    </h1>
    <p class="paragraph">
      100% customisable and SEO-friendly blog template <br />for personal and
      commercial purposes.
    </p>
  </div>
  <PostsList :posts="posts" />
  <PostsList :posts="tutos" />
</template>

<script setup lang="ts">
import PostsList from "@/components/PostsList.vue";
import { usePosts, useTutorials } from "@/composable/useApi";
const posts = usePosts();
const tutos = useTutorials();
</script>

<style>
@font-face {
  font-family: "Graphik";
  src: url("@/assets/fonts/GraphikBold.otf") format("truetype"); /* Adjust the path as needed */
}
@font-face {
  font-family: "Graphik-light";

  font-weight: 400;
  src: url("@/assets/fonts/GraphikRegular.otf") format("truetype");
}

.home {
  /* display: block;
  width: 1000px;
  margin: auto;
  align-items: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
}
.meet {
  font-family: "inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  color: rgba(29, 41, 57, 1);
  padding: 8px 10px;
  border-radius: 15px;
  background-color: rgba(242, 244, 247, 1);
}
.text-principal {
  font-size: 76px;
  align-items: center;
  /* font-weight: 700; */
  font-family: "Graphik";

  background: linear-gradient(97.1deg, #c41740 4.8%, #ea9c28 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}
.paragraph {
  font-size: 28px;
  line-height: 42px;
  /* font-weight: 400 !important; */
  font-family: "Graphik-light";
  text-align: center;
  color: rgba(71, 84, 103, 1);
}
</style>
