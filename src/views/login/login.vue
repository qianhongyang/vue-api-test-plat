<template>
    <div>
        <p>{{ $t("title") }}</p>
        <p>{{this.$store.state.city}}</p>
        <button @click="get_url">点我</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            get_url:function () {
                window.location.href = "https://rccchina.zoom.us/j/94464223784"
            }
        }
    }

</script>

<style scoped>

</style>