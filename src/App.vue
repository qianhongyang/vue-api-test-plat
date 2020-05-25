<template>
    <div id="app">
        <keep-alive include="home">
            <router-view/>
        </keep-alive>
    </div>

</template>

<script>

    export default {
        name: "app",
        data() {
            return {
                isRouterAlive: true
            }
        },
    }
</script>

<style>
    #nprogress .bar {
        background: green !important;
    }
</style>
