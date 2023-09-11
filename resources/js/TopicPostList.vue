<template>
    <div class="container w-full p-3 mx-auto my-12 text-purple-800 md:w-3/4 lg:w-3/5 xl:w-1/2" >
        <h2 class="text-3xl" v-if="topic">
            <router-link :to="{name: 'index'}" class="text-gray-600 hover:underline">All Posts</router-link>
            <span class="text-gray-800 ">/</span>
            {{ topic.name }}
        </h2>
        <!-- <div>Loading: {{ $apollo.loading }}</div>
        <div>Is posts loading: {{ $apollo.queries.posts.loading }}</div> -->
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <!-- <div v-for="post in posts" :key="post.id">
                {{ post.id }} is titled: {{ post.title }}
            </div> -->
            <PostListItem v-for="post in topic.posts" :key="post.id" :post="post" class="mt-3"></PostListItem>
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
        topic:
        {
            query: gql`
                query($slug: String!){
                    topic(slug: $slug){
                        id
                        name
                        posts{
                            id
                            title
                            lead
                            created_at
                            author {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables(){
                return {
                    slug: this.$route.params.slug
                };
            }
        }
    }
}
</script>
