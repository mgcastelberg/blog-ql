<template>
    <div>
        <router-link :to="{name: 'post', param: {id:post.id}}">
            <h4 class="pb-2 text-2xl font-semibold cursor-pointer hover:underline hover:text-purple-600 ">{{ post.title }}</h4>
        </router-link>
        <p class="pb-2 text-gray-600">{{ post.lead }}</p>
        <div class="pb-2 text-sm text-gray-500">By Manuel Gomez 3 hours ago</div>
    </div>
</template>

<script>
export default {
 props: {
    post: Object
 }
}
</script>
