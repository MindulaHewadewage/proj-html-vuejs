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
        <!-- name location -->
        <div class="event-name-location">
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
                <button class="coloured">BOOK NOW</button>

            </div>
        </div>


    </div>


</template>
<style scoped lang="scss">
.live-date-card {
    background-color: #323844;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
}

.event-name-location {
    display: flex;
    align-items: center;


    .fa-plus {
        color: white;
        padding-left: 10px;

    }

    p {
        padding: 0 15px;
        margin: 0;
        color: #EC4858;
    }
}

.event-information {
    display: none;
    background-color: #323844;

    padding-top: 10px;

    img {
        width: 700px;
        padding: 10px;

    }

    h6 {
        color: white;
    }

    p {
        color: #7D7B8D
    }

    .coloured {
        background-color: #EC4858;
        border: 0;
        color: white;

        margin-top: 20px;
        padding: 10px 30px;
        border-color: white;

    }
}

.event-booking {
    padding: 20px;
}
</style>