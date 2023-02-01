<script>
export default {
    name: 'NewsCard',
    props: {
        item: Object
    }
}</script>


<template>
    <div class="news-card">
        <img :src="item.img" alt="">
        <h1>{{ item.title }}</h1>
        <p>{{ item.subtitle }}</p>
    </div>
</template>
<style>

</style>