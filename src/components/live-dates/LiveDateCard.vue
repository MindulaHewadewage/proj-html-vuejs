<script>
export default {
    name: 'LiveDateCard',
    props: {
        event: Object
    }
}
</script>


<template>
    <!-- card -->
    <div class="live-date-card">
        <font-awesome-icon icon="fa-solid fa-plus" />
        <p>{{ event.date }}{{ event.festival_name }}{{ event.location }}</p>
    </div>

    <!-- information -->
    <div class="event-information">
        <div class="event-map">
            <img :src="event.location_img" alt="">
        </div>
        <div class="event-booking">
            <h6>{{ event.festival_name }}</h6>
            <p>{{ event.festival_description }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.live-date-card {
    min-height: 50px;
    background-color: #323844;
    margin-bottom: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;


    .fa-plus {
        color: white;
        padding-left: 20px;
    }

    p {
        margin: 0;
        padding: 0 30px;
        color: #EC4858;
    }

}

.event-information {
    display: flex;
}
</style>