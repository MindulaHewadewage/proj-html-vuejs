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
@use '../../assets/sass/variables' as*;

.divider {
    background-color: $primary;
    color: white;
    min-height: 100px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        transition: 0.5s;
    }

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