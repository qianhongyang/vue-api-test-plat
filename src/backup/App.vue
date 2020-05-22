<template>
    <div id="app">
        <div v-if="homeShow">
            <Home/>
        </div>
        <div v-if="baseShow">
            <router-view/>
        </div>
    </div>

</template>

<script>
    import home from "@/views/layout/home";

    export default {

        data() {
            return {
                homeShow: true,
                baseShow: true
            }
        },
        components: {
            Home: home,
        },

</script>

<style>
</style>
