<template>
    <div>
        <Breadcrumb separator=">">
            <Icon type="ios-home-outline"></Icon>
            <BreadcrumbItem v-for="(item,index) in list" :key="index" :to="item.path">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>


<script>
    export default {
        name: "Qbreadcrumb",
        data() {
            return {
                list: []  // 容器
            }
        },
        watch:{
            $route(){   // 监听路由变化
                this.list = [];
                this.list = this.$route.matched
            }
        },
        mounted(){  // 刷新时
            this.list = this.$route.matched
        }
    }
</script>

<style scoped>

</style>