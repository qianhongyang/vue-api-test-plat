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
        methods: {
            get_url: function () {
                window.location.href = "http://exmail.qq.com"
            }
        }
    }
</script>

<style scoped>

</style>