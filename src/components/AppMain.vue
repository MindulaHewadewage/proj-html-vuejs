<script>
import BlockSection from './structure/BlockSection.vue';
import SectionDivider from './structure/SectionDivider.vue';
import NewsCardSection from './news/NewsCardSection.vue';
import SongPreview from './structure/SongPreview.vue';
export default {

    components: { BlockSection, SectionDivider, NewsCardSection, SongPreview }
}
</script>

<template>
    <block-section title="Music Is Life" class="bg-lightgrey"></block-section>
    <block-section title="Latest Band News" class="bg-darkgrey"></block-section>
    <news-card-section></news-card-section>
    <section-divider title="view all latest news"></section-divider>
    <song-preview></song-preview>
    <block-section title="Live Dates" class="bg-darkgrey"></block-section>

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