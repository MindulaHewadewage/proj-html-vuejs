<script>
export default {

}

</script>


<template>
    <div class="jumbotron">
        <div class="large-container">
            <header>
                <div class="logo">
                    <a href="#"><img src="../assets/img/avada-music-logo-retina.png" alt=""></a>
                </div>
                <div class="menu-bars">
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </a>
                </div>
            </header>
        </div>

        <div class="open-menu">
            <ul>
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>Meet The Band </li>
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

        <div class="jumbotron-content">
            <h1>Untold Stories</h1>
            <p><i>There is an untold story behind every favorite song.</i> </p>
            <div class="buttons">
                <button class="coloured">LATEST ALBUM</button>
                <button>LIVE DATES</button>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.jumbotron {
    background-image: url(../assets/img/home_slider.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
    position: relative;
}

.open-menu {
    height: 100vh;
    width: 100%;
    background-color: #EC4858;
    color: white;
    text-align: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    li {
        font-size: 40px;
        font-weight: 100;
        padding: 10px;
        opacity: 0.5;

        &:hover {
            opacity: 1;
            scale: 1.1;
            transition: 0.3s;
        }
    }


}

.jumbotron-content {
    color: white;
    height: calc(100% - 200px);


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 110px;
        font-weight: 700;
    }


    // BUTTONS
    .buttons {


        .coloured {
            background-color: #EC4858;
            border: 0
        }

        button {
            color: white;
            background-color: transparent;
            padding: 10px 30px;
            border-color: white;
            margin: 5px;
        }
    }

}

header {
    min-height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 40px;
    right: 40px;
    z-index: 1;

    .logo {
        width: 250px;
    }

    .fa-bars {
        font-size: 25px;
    }

    a {
        color: white;
    }
}
</style>