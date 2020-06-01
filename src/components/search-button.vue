<template>
    <div>
        <Input :placeholder="placeholder" style="width: auto"/>
        <Button type="success" style="margin-left: 5px">search</Button>
        <Button type="success" style="margin-left: 5px">{{msg}}</Button>
    </div>
</template>

<script>
    export default {
        name: "search-button",
        props: {
            placeholder: {
                default: "输入名称查询",
                type:String,
            },
            msg:{
                type:String,
                default: "新建",
            }
        }
    }
</script>

<style scoped>

</style>