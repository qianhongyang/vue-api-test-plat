<template>
    <div style=" height: 30px">
        <Breadcrumb separator="->" style="transform:translateY(20%)" >
            <Icon type="ios-home" size="18" />
            <BreadcrumbItem v-for="(item,index) in list" :key="index" :to="item.path">{{item.meta.title}}</BreadcrumbItem>
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