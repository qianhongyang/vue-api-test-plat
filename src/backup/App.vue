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
    //var reg = /^error.*/;
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
        // 判断路由
        mounted() {
            this.path = this.$route.path;
            console.log(this.$route.path)
        },
        watch: {
            $route() {
                if (this.$route.name === "error_404" || this.$route.path === "/") {
                    this.homeShow = false;
                    this.baseShow= true;
                } else {
                    this.homeShow = true;
                    this.baseShow = false;
                }
            }
        }
    }
</script>

<style>
</style>
