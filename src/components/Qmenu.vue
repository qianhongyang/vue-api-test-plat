<template>
    <Submenu :name="sub.name" >
        <template slot="title">
            <Icon :type="sub.icon_type"/>
            <span>{{sub.menu_name}}</span>
        </template>
        <MenuItem v-for="item in sub.path_list" :key="item.path" :to="item.path" :name="item.path">
            {{ item.option }}
        </MenuItem>
    </Submenu>
</template>

<script>
    export default {
        name: "Qmenu",
        props: ["sub","path_list"],
    }
</script>

<style scoped>

</style>