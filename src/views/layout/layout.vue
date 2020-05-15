<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }


    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

    .collapsed-menu /deep/ .ivu-icon-ios-arrow-down {
        display: none;
    }


</style>
<template>
    <div class="layout">
        <Layout>
            <qheader></qheader>
            <hr style='border:1px inset #d7dde4;'> <!--分割线-->
            <Layout :style="{minHeight: '100vh'}">
                <Sider ref="side1" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                        <Qside_menu></Qside_menu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <qbreadcrumb/>
                    <Content :style="{padding: '24px', minHeight: '532px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import Qheader from "@/views/layout/header/header"
    import Qside_menu from "@/views/layout/side-menu/side-menu";
    import Qbreadcrumb from "@/views/layout/breadcrumb/Qbreadcrumb";

    export default {
        data() {
            return {
                isCollapsed: false
            };
        },
        components: {
            Qheader,
            Qside_menu,
            Qbreadcrumb,
        },

        methods: {
            go(name) {
                this.$router.push(name)
            },
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>
