<template>
    <div>
        <QmenuDropdown :name="name" :size="size" :icon_type="icon_type" :dropdownmeus="dropdownmeus"/>
    </div>
</template>

<script>
    import QmenuDropdown from "@/components/QmenuDropdown";
    export default {
        name: "hoverDropDown",
        components:{
            QmenuDropdown,
        },
        data(){
            return {
                name:"2",
                size:"28",
                icon_type:"ios-navigate",
                dropdownmeus:[
                    {
                    path:"about",
                    name:this.$t("home.nav.Item1.option1"),
                },
                    {
                        path:"projects",
                        name:"项目"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>