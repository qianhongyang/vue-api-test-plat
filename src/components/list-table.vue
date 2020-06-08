<template>
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
</template>
<script>
    export default {
        name:"list-table",
        props:["columns12","data6"],
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `你打开我了<br>Name：${this.data6[index].name}<br>ID：${this.data6[index].id}<br>描述：${this.data6[index].describe}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
