<script>
export default {

}
</script>

<template>
    <div class="bg">
        <div class="large-container">
            <div class="copyright">
                <ul>
                    <a href="#">
                        <li>@Copyright 2012 - 2020</li>
                    </a>
                    <a href="#">
                        <li>AVADA THEME BY THEMEFUSION</li>
                    </a>
                    <a href="#">
                        <li>ALL RIGHTS RESERVED</li>
                    </a>
                    <a href="#">
                        <li>POWERED BY WORDPRESS</li>
                    </a>
                </ul>
            </div>
            <div class="social">
                <div class="small-box"><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></div>
                <div class="small-box"><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></div>
                <div class="small-box"><a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></div>
                <div class="small-box"><a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/sass/variables' as*;

.bg {
    background-color: $darkgrey;
}

.large-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    .copyright {

        ul {
            display: flex;
            margin: 0;
            padding: 0;
            font-size: 10px;

            li {
                color: $font-secondary-color;

            }
        }
    }


    .social {
        display: flex;

        .small-box {
            width: 30px;
            height: 30px;
            background-color: $lightgrey;
            margin: 0 4px;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                color: $font-secondary-color;

                &:hover {
                    color: white;
                }
            }

        }


    }
}
</style>