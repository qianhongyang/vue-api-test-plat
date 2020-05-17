<template>
    <div id="app">
        <div v-if="homeShow">
            <Home/>
        </div>
        <router-view/>
    </div>

</template>

<script>
    import home from "@/views/layout/home";

    export default {
        data() {
            return {
                homeShow: true
            }
        },
        components: {
            Home: home,
        },
        // 判断路由
        mounted() {
            this.path = this.$route.path;
            console.log(this.$route.path)
        },
        watch: {
            $route() {
                if (this.$route.path === "/login" || this.$route.path ===  "/") {
                    this.homeShow = false;
                } else {
                    this.homeShow = true;
                }
            }
        }
    }
</script>

<style>
</style>
