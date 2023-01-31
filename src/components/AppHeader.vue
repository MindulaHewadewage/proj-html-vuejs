<script>
export default {

}

</script>


<template>
    <div class="jumbotron">
        <div class="large-container">
            <header>
                <div class="logo">
                    <img src="../assets/img/avada-music-logo-retina.png" alt="">
                </div>
                <div class="menu-bars">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </div>
            </header>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.jumbotron {
    background-image: url(../assets/img/home_slider.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
}

header {
    color: white;
    min-height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        width: 250px;
    }

    .fa-bars {
        font-size: 30px;
    }
}
</style>