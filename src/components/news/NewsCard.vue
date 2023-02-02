<script>
export default {
    name: 'NewsCard',
    props: {
        item: Object
    }
}
</script>


<template>
    <div class="news-card">
        <img :src="item.img" :alt="item.title">
        <div class="card-text">
            <h5>{{ item.title }}</h5>
            <p>{{ item.subtitle }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.news-card {
    width: calc(100% / 3);
    padding: 10px;

    img {
        height: 80%;
        width: 100%;
        object-fit: cover;
    }
}

.card-text {
    padding: 5px 10px;
    background-color: #323844;

    h5 {
        color: #EC4858;
    }

    p {
        color: #7D7B8D;
    }
}
</style>