<template>
    <div class="container w-full p-3 mx-auto my-12 text-purple-800 md:w-3/4 lg:w-3/5 xl:w-1/2" >
        <h2 class="text-3xl ">All Posts</h2>
        <!-- <div>Loading: {{ $apollo.loading }}</div>
        <div>Is posts loading: {{ $apollo.queries.posts.loading }}</div> -->
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <!-- <div v-for="post in posts" :key="post.id">
                {{ post.id }} is titled: {{ post.title }}
            </div> -->
            <PostListItem v-for="post in posts" :key="post.id" :post="post" class="mt-3"></PostListItem>
        </div>

    </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from './components/PostListItem'
export default {
    components: {
        PostListItem
    },
    apollo: {
        posts: gql`
        {
            posts {
                id
                title
                lead
            }
        }
        `
    }
}
</script>
