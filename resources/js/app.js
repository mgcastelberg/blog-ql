/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import './bootstrap';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import PostList from './PostList';
import Post from './Post';
import TopicPostList from './TopicPostList';
import AuthorPostList from './AuthorPostList';
import NotFound from './NotFound';

// window.Vue = require('vue');
window.Vue = Vue;
Vue.use(VueRouter);

// Routes
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    // uri: '127.0.0.1:8000/graphql'
    uri: '/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});


const router = new VueRouter({
    mode: 'history', //this line use to clean url vue without #
    routes
});

import moment from "moment";
Vue.filter("timeAgo", value => moment(value). fromNow());
Vue.filter("longDate", value => moment(value). format("MMMM Do YYYY"));

const app = new Vue({
    el: '#app',
    // inject apolloProvider here like vue-router or vuex
    apolloProvider,
    router,
});
