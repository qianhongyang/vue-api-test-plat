<template>
    <div>
        <Qbutton :msg="msg" :placeholder="placeholder"/>
        <div style="margin-top: 10px">
            <Qtable :columns12="columns12" :data6="data6"/>
        </div>
    </div>
</template>

<script>
    import Qtable from "@/components/list-table"
    import Qbutton from "@/components/search-button"

    export default {
        components: {Qtable, Qbutton},
        data() {
            return {
                columns12: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],

                msg: "新建项目",
                placeholder: "请输入项目名称查询",

            }
        },
    }
</script>

<style scoped>

</style>