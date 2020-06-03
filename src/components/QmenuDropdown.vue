<template>
    <MenuItem :name="name" :disabled="true">
        <Dropdown>
            <Icon :size="size" :type="icon_type"/>
            <DropdownMenu slot="list">
                <span v-for="item in dropdownmeus" :key="item.path">
                    <router-link :to="item.path">
                        <DropdownItem>{{item.name}}</DropdownItem>
                    </router-link>
                </span>
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
</template>

<script>
    export default {
        name: "QmenuDropdown",
        props: ["name", "size", "icon_type","dropdownmeus"]
    }
</script>

<style scoped>

</style>