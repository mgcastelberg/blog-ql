<template>
    <div v-if="post">
        <router-link :to="{name: 'post', params: {id: post.id}}">
            <h4 class="pb-2 text-2xl font-semibold cursor-pointer hover:underline hover:text-purple-600 ">{{ post.title }}</h4>
        </router-link>
        <p class="pb-2 text-gray-600">{{ post.lead }}</p>
        <div class="pb-2 text-sm text-gray-500">By
            <router-link :to="{name: 'author', params: {id: post.author.id} }" class="underline hover:text-black"
            >{{ post.author.name }}</router-link> in
            <router-link :to="{name: 'topic', params: {slug: post.topic.slug} }" class="underline hover:text-black"
            >{{ post.topic.name }}</router-link> • {{ post.created_at | timeAgo }}</div>
    </div>
</template>

<script>
export default {
 props: {
    post: Object
 }
}
</script>
