<template>
    <div class="flex justify-center w-screen h-screen bg-gray-200">
        <div class="self-center text-center text-gray-600">
            <h1 class="text-6xl text-shadow">404</h1>
            <h3 class="text-4xl text-shadow">This page can not found!</h3>
        </div>
        <div class="absolute bottom-0 mb-12 text-lg text-center text-gray-600">
            <span class="opacity-50 ">Take me back to</span>
            <a href="#" class="text-blue-800 border-b" @click="$router.go(-1)">where I was</a>
        </div>
    </div>
</template>
