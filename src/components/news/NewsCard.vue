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
        <div class="card-image">
            <img :src="item.img" :alt="item.title">
            <div class="hover-text">
                <h5>{{ item.title }}</h5>
            </div>
        </div>
        <div class="card-text">
            <h5>{{ item.title }}</h5>
            <p>{{ item.subtitle }}</p>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../../assets/sass/variables' as*;

.news-card {
    width: calc(100% / 3);
    padding: 10px;
    color: white;

}

.card-image {
    position: relative;

    img {
        height: 500px;
        object-fit: cover;
    }

    .hover-text {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: $primary;
            opacity: 0.7;
            color: white;
            transition: 0.5s;
        }

        &:hover h5 {
            display: block;
        }

        h5 {
            display: none;


        }



    }
}

.card-text {
    padding: 5px 10px;
    background-color: $lightgrey;

    h5 {
        color: $primary;
    }

    p {
        color: $font-secondary-color;
    }
}
</style>