<script>
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <div class="divider">
        <p>{{ title }}</p>
    </div>
</template>

<style scoped lang="scss">
.divider {
    background-color: #EC4858;
    color: white;
    min-height: 100px;


    display: flex;
    justify-content: center;
    align-items: center;

    p {
        padding: 0;
        margin: 0;
        text-transform: uppercase;
    }
}
</style>