<template>
    <div class="login_bgcolor">
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
                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>
    .login_bgcolor {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
</style>