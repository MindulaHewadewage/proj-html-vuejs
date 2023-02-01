<script>
export default {

}
</script>

<template>
    <div class="parallax">

        <div class="xs-container">
            <p>"I just listened to it and said to myself, "Man, I really love this
                album." Still, today, it just sounds so fresh. lt sounds full of ideas.
                These guys knew what they were doing. They're good. And they're
                inventive. I haven't heard anything this year that's as inventive. I
                don' t really expect to."
            </p>
            <img src="../../assets/img/band_interview_play_icon.png" alt="">

        </div>
    </div>
</template>


<style scoped lang="scss">
.parallax {
    height: 600px;
    background-image: url(../../assets/img/home-testimonial-parallax.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.xs-container {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-align: center;
        color: white;
        font-style: italic;
    }

    img {
        width: 70px;
    }
}
</style>