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
    import axios from "@/libs/api.request";

    export default {
        components: {Qtable, Qbutton},
        data() {
            return {
                columns12: [
                    {
                        title: this.$t("modules.title.t1"),
                        slot: 'id'
                    },
                    {
                        title: this.$t("modules.title.t2"),
                        key: 'name'
                    },
                    {
                        title: this.$t("modules.title.t3"),
                        key: 'describe'
                    },
                    {
                        title: this.$t("modules.title.t4"),
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [],
                msg: this.$t("modules.title.msg"),
                placeholder: this.$t("modules.title.pla"),

            }
        },
        mounted() {
            axios.request({
                url: '/api/modules_list',//请求的地址
                method: 'post',//请求的方式
            }).then(res => {
                console.info('后台返回的数据', res.data);
                this.data6 = res.data.data
            }).catch(err => {
                console.info('报错的信息', err.response.message);
            });
        }
    }
</script>

<style scoped>

</style>