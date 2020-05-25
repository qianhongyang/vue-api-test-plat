<template>
    <div>
        <template slot="title">
            <Icon type="ios-navigate"></Icon>
            <span>{{ $t("home.nav.Item1.I") }}</span>
        </template>
        <MenuItem :name="menuName" :to="toRouter">
            {{ optionName }}
        </MenuItem>
    </div>
</template>

<script>
    export default {
        name: "Qmenu"
    }
</script>

<style scoped>

</style>