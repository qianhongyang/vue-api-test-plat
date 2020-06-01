<template>
    <div>
        <Qbutton :msg="msg" :placeholder="placeholder"/>
        <div style="margin-top: 10px">
            <Qtable/>
        </div>
    </div>
</template>

<script>
    import Qtable from "@/components/list-table"
    import Qbutton from "@/components/search-button"

    export default {
        components: {Qtable, Qbutton},
        data(){
            return{
                msg:"新建项目",
                placeholder:"请输入项目名称查询",
            }
        }
    }
</script>

<style scoped>

</style>