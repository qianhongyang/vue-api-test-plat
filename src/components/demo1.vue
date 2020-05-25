<template>
    <div>
        <p>hello,{{yourName}}</p>
        <MenuItem :name="menuName" :to="toRouter">
            {{ optionName }}
        </MenuItem>
    </div>
</template>

<script>

    export default {
        name: "demo1",
        props: [
            "yourName",
            "optionName",
            "toRouter",
            "menuName",
        ]
    }
</script>

<style scoped>

</style>