<script>
export default {
    name: 'LiveDateCard',
    props: {
        event: Object
    }
}
</script>


<template>
    <div class="live-date-card">
        <p>{{ event.date }}{{ event.festival_name }}{{ event.location }}</p>
    </div>
</template>
<style scoped lang="scss">
.live-date-card {
    min-height: 50px;
    background-color: #323844;
    margin-bottom: 10px;

    display: flex;
    align-items: center;

    p {
        margin: 0;
        padding: 0 30px;
        color: #EC4858;
    }
}
</style>