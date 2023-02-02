<script>
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <section>
        <div class="xs-container">
            <h1 class="section-title">{{ title }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque eligendi inventore aut et pariatur
                totam non exercitationem ipsam?
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    min-height: 100px;
    text-align: center;
    padding: 30px 0;
    color: $font-secondary-color;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;

        &::after {
            content: '';
            display: block;
            width: 200px;
            height: 1px;
            margin: 1rem auto;
            background-color: $font-secondary-color;
        }
    }


}
</style>