<script>
import BlockSection from './structure/BlockSection.vue';
import SectionDivider from './structure/SectionDivider.vue';
import NewsCardSection from './news/NewsCardSection.vue';
import SongPreview from './song-preview/SongPreview.vue';
import LiveDatesSection from './live-dates/LiveDatesSection.vue'
export default {

    components: { BlockSection, SectionDivider, NewsCardSection, SongPreview, LiveDatesSection }
}
</script>

<template>
    <block-section title="Music Is Life" class="bg-lightgrey"></block-section>
    <block-section title="Latest Band News" class="bg-darkgrey"></block-section>
    <news-card-section></news-card-section>
    <section-divider title="view all latest news"></section-divider>
    <song-preview></song-preview>
    <block-section title="Live Dates" class="bg-darkgrey"></block-section>
    <live-dates-section></live-dates-section>
    <section-divider title="view all live dates"></section-divider>

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