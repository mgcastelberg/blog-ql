<template>
    <div class="container w-full p-3 mx-auto my-12 text-purple-800 md:w-3/4 lg:w-3/5 xl:w-1/2" >
        <h2 class="text-3xl " v-if="user">
            <router-link :to="{name: 'index'}" class="text-gray-600 hover:underline">All Posts</router-link>
            <span class="text-gray-800 ">/</span>
            {{ user.name }}
        </h2>
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <PostListItem v-for="post in user.posts" :key="post.id" :post="post" class="mt-3"></PostListItem>
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
        user:
        {
            query: gql`
                query($id: ID!){
                    user(id: $id){
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
                    id: this.$route.params.id
                };
            }
        }
    }
}
</script>
