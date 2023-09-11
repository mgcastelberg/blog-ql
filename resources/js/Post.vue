<template>
    <div class="container w-full px-4 mx-auto mt-20 md:w-3/4 lg:w-3/5 xl:w-1/2">

        <div v-if="$apollo.loading">Loading...</div>

        <div v-if="post">
            <div class="text-lg text-gray-600">
                By {{ post.author.name }} in
                <router-link :to="{name: 'topic', params: {slug: post.topic.slug} }" class="underline hover:text-black"
                >{{ post.topic.name }}</router-link> • {{ post.created_at | timeAgo}}
            </div>
            <h1 class="mt-10 text-5xl font-bold">{{ post.title }}</h1>
            <p class="pb-3 mb-12 text-gray-700 whitespace-pre-line">
                {{ post.content }}
            </p>
            <div class="flex mb-24">
                <div class="mr-6">
                    <img :src="'/storage/faces/' + post.author.avatar" alt="Ahutor Avatar" class="w-16 h-16 rounded-full">
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-gray-600 ">Written by
                        <router-link :to="{name: 'author', params: {id: post.author.id} }" class="underline hover:text-black"
                        >{{ post.author.name }}</router-link> </div>
                    <div class="text-gray-700 ">Published in
                        <router-link :to="{name: 'topic', params: {slug: post.topic.slug} }" class="underline hover:text-black"
                        >{{ post.topic.name }}</router-link>
                        on {{ post.created_at | longDate}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import gql from "graphql-tag"
export default {
    apollo: {
        post: {
            query: gql`
                query ($id: ID!){
                    post(id: $id){
                        id
                        title
                        content
                        created_at
                        author {
                            id
                            name
                            avatar
                        }
                        topic {
                            name
                            slug
                        }
                    }
                }`,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                error() {
                    this.$router.push({ name: '404'});
                }
        }
    }
}
</script>
