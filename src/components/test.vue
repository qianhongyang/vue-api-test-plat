<template>
    <div>
        <demo1 :yourName="yourName" to-router="/home" option-name="test" menu-name="menu1"/>
        <demo1 :yourName="yourName" to-router="/home" option-name="test" menu-name="menu1"/>
    </div>
</template>

<script>
    import demo1 from "@/components/demo1";

    export default {
        name: "test",
        components: {demo1},
        data() {
            return {
                yourName: "aaaa"
            }
        }
    }
</script>

<style scoped>

</style>