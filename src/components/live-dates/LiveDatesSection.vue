<script>
import LiveDateCard from './LiveDateCard.vue'
export default {
    components: { LiveDateCard },
    data() {
        return {
            events: [
                {
                    visible: false,
                    date: "17/08/2020 ",
                    festival_name: "GEM FESTIVAL 2020 ANAKALIA",
                    location: " - GEORGIA",
                    location_img: "https://i.stack.imgur.com/fowQt.png",
                    festival_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem illo dolor fuga similique explicabo fugit dolorem dolorum consequuntur cum, beatae quisquam porro odio amet quos, eius corrupti ad debitis.",
                },
                {
                    date: "24/09/2020 ",
                    festival_name: "GROOVEFEST",
                    location: " - DOMINICAL REPUBLIC",
                    location_img: "https://i.stack.imgur.com/fowQt.png",
                    festival_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem illo dolor fuga similique explicabo fugit dolorem dolorum consequuntur cum, beatae quisquam porro odio amet quos, eius corrupti ad debitis.",
                },
                {
                    date: "31/10/2020 ",
                    festival_name: "OASIS FESTIVAL 2020 MARRAKECH",
                    location: " - MOROCCO",
                    location_img: "https://i.stack.imgur.com/fowQt.png",
                    festival_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem illo dolor fuga similique explicabo fugit dolorem dolorum consequuntur cum, beatae quisquam porro odio amet quos, eius corrupti ad debitis.",
                },
                {
                    date: "07/11/2020 ",
                    festival_name: "MOGA FESTIVAL",
                    location: " - ESSAOURIA,MOROCCO",
                    location_img: "https://i.stack.imgur.com/fowQt.png",
                    festival_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem illo dolor fuga similique explicabo fugit dolorem dolorum consequuntur cum, beatae quisquam porro odio amet quos, eius corrupti ad debitis.",
                },
                {
                    date: "10/12/2020",
                    festival_name: "ENVISION FESTIVAL",
                    location: " - UVITA, COSTA RICA",
                    location_img: "https://i.stack.imgur.com/fowQt.png",
                    festival_description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem illo dolor fuga similique explicabo fugit dolorem dolorum consequuntur cum, beatae quisquam porro odio amet quos, eius corrupti ad debitis.",
                },


            ]

        }
    }
}
</script>

<template>
    <div class="bg">

        <div class="small-container">
            <live-date-card v-for="event in events" :key="event.location" :event="event"></live-date-card>
        </div>
    </div>
</template>



<style scoped lang="scss">
.bg {
    background-color: #252A33;
}

.small-container {
    height: 400px;
    overflow-y: auto;
}

::-webkit-scrollbar {
    width: 0;
}
</style>