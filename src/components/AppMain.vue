<script>
import BlockSection from './structure/BlockSection.vue';
import NewsCardSection from './structure/NewsCardSection.vue'
export default {

    components: { BlockSection, NewsCardSection }
}
</script>

<template>
    <block-section title="Music Is Life" class="bg-lightgrey"></block-section>
    <block-section title="Latest Band News" class="bg-darkgrey"></block-section>
    <news-card-section></news-card-section>
</template>

<style scoped lang="scss">
// BLOCK SECTION BACKGROUND COLOR
.bg-lightgrey {
    background-color: #323844;
}

.bg-darkgrey {
    background-color: #252A33;
}
</style>