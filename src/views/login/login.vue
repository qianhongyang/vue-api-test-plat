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
                window.location.href = "http://exmail.qq.com/cgi-bin/ftnExs_download?k=2a633364d5e7d4cb2edc054e41640f004a0701525f01080b5c4e5251565015065c070b495f555d044850030657525d5151070a05536421321700503b1401595600111e130f0a0b00480a5257544a425b15630d&t=exs_ftn_download&code=ec3dfd82&s=email&fid=72/d269e099-a504-49d8-91e6-30b16ec4d9a5"
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