<script>
import NewsCard from './NewsCard.vue'
export default {
    name: 'NewsCardSection',
    components: { NewsCard },
    data() {
        return {
            items: [
                {
                    img: "src/assets/img/blog_music_techo.jpg",
                    title: "Technology and music",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },
                {
                    img: "src/assets/img/blog-post1.jpg",
                    title: "Taking it back to the old school",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },
                {
                    img: "src/assets/img/blog-post3.jpg",
                    title: "While my guitar gently weeps",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },
                {
                    img: "src/assets/img/blog-post4.jpg",
                    title: "It just sounds better",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },
                {
                    img: "src/assets/img/blog_flavor_rock.jpg",
                    title: "The flavor of rock",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },
                {
                    img: "src/assets/img/blog-post2.jpg",
                    title: "Sharing the stage with a legend",
                    subtitle: "Sed sit amet sem turpis.Curabitur cursus lacinia est at interdum risus id condimentum.",
                },


            ]

        }
    }
}
</script>

<template>
    <div class="bg">
        <div class="small-container">
            <div class="card-container">
                <news-card v-for="item in items" :key="item.title" :item="item"></news-card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/variables' as*;

.bg {
    background-color: $darkgrey;

}

.small-container {
    padding-bottom: 30px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;

}
</style>