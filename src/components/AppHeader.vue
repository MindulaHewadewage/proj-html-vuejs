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
                <li>Home</li>
                <li>Meet The Band </li>
                <li>Live Dates</li>
                <li>Latest News</li>
                <li>Albums</li>
                <li>Fans</li>



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
    position: absolute;
    color: white;


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