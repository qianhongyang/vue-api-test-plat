<template>
    <div>
        <div class="logo" id="a"  title="404鸭~">
            <img src="@/assets/images/error-page/cute_girl.jpeg" alt="1">
        </div>
        <br/><br/>
        <div class="container">
            <p id="roloadText">404！网页君找不到这个网页了哦...</p>
        </div>
        <div class="box bg-1">
            <button class="button button--antiman button--round-l button--text-medium"
                    @click="go_home"><span>返回首页</span></button>

        </div>
    </div>
</template>

<script>

    export default {
        name: "404_cute",
        data(){
            return {
                imageurl : "@/assets/images/error-page/cute_girl.jpeg"
            }
        },
        methods: {
            go_home() {
                this.$router.push('/home')
            },


        }
    }
</script>

<style scoped>
    @import "css/button.css";
    @import "css/style.css";
</style>