<script>
export default {
    title: {

    }
}
</script>

<template>
    <div class="xs-container">
        <section>
            <h1 class="section-title">Music Is Life</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque eligendi inventore aut et pariatur
                totam non exercitationem ipsam?
            </p>
        </section>
    </div>
</template>

<style scoped lang="scss">
section {
    min-height: 100px;
    text-align: center;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

h1 {
    &::after {
        content: '';
        display: block;
        width: 200px;
        height: 1px;
        margin: 1rem;
        background-color: black;
    }
}
</style>