<template>
    <div>
        <template slot="title">
            <Icon :type="icon_type"/>
            <span>{{menu_name}}</span>
        </template>
        <MenuItem v-for="item in path_list" :key="item" :to="item.path">
            {{ item.option }}
        </MenuItem>
    </div>
</template>

<script>
    export default {
        name: "Qmenu",
        props: ["icon_type", "menu_name", "path_list"],
    }
</script>

<style scoped>

</style>