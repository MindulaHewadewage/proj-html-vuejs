<script>
export default {
    name: 'FooterTop',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="bg">

        <div class="large-container">
            <div class="logo">
                <img src="../../assets/img/avada-music-logo-retina.png" alt="">
            </div>
            <div class="navbar-menu">
                <ul>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Meet The Band</li>
                    </a>
                    <a href="#">
                        <li>Live Dates</li>
                    </a>
                    <a href="#">
                        <li>Latest News</li>
                    </a>
                    <a href="#">
                        <li>Albums</li>
                    </a>
                    <a href="#">
                        <li>Fans</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/sass/variables' as*;

.bg {
    background-color: $lightgrey;
}

.large-container {
    padding: 30px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

}


.logo {


    img {
        width: 200px;
    }
}

.navbar-menu {

    ul {
        display: flex;
        margin: 0;

        li {
            padding: 10px;
            color: $font-secondary-color;

            &:hover {
                color: white;
            }
        }


    }
}
</style>