<template>
<h1>{{ post?.title }}</h1>
<img :src="post?.image" alt="">
<p v-html="content" ></p>
</template>

<script setup lang="ts">
import { usePosts } from "@/composable/useApi"
import { Post } from "@/types/Post";
import { useRoute } from "vue-router";
import {computed} from 'vue'

import showdown from 'showdown'

const converter = new showdown.Converter()

const posts = usePosts()
const route = useRoute()

const slug = route.params.slug
const post = posts.find((post: Post) => post.slug === slug)

console.log(post);

const content = computed(() => {
  return converter.makeHtml(post?.content)
})

</script>