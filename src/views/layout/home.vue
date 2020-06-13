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

    .main-breadcrumb {
        padding: 8px 15px 0;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Qheader/>
            <hr style='border:1px inset #d7dde4;'> <!--分割线-->
            <Layout :style="{minHeight: '100vh'}">
                <Sider ref="side1" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu width="auto" :class="menuitemClasses" :theme="theme3" active-name="sub1" :accordion="true">
                        <component :is="comName"/>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <qbreadcrumb/>
<!--                    <Qtagrouter/>-->
<!--                    <div class="tag-nav-wrapper">-->
<!--                        <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>-->
<!--                    </div>-->
                    <Content :style="{padding: '24px', minHeight: '532px', background: '#fff' ,}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import { getNewTagList, routeEqual } from '@/libs/util'
    import Qheader from "@/views/layout/header/header"
    import Qside_menu from "@/views/layout/side-menu/side-menu";
    import Qbreadcrumb from "@/views/layout/breadcrumb/Qbreadcrumb";
    import hoverDropDown from "@/views/layout/side-menu/hoverDropDown";
    // import tagnav from "@/views/layout/tags-nav/tags-nav"
    // import tagrouter from "@/views/layout/tag/tag-routers"

    export default {
        data() {
            return {
                isCollapsed: false,
                theme3: 'dark',
                comName: "Qside_menu",
                breadCrumbList: [{path: "report", name: "report", icon: "md-aperture", mate: {title: "report"}},
                    {path: "my_report", name: "my_report", icon: "md-aperture", mate: {title: "my_report"}}],
                currentPath: [
                    {
                        title: '首页',
                        path: 'home',
                        name: 'home'
                    }
                ],
            };
        },
        components: {
            Qheader,
            Qside_menu,
            Qbreadcrumb,
            hoverDropDown,
            // tagnav,
            // Qtagrouter,
        },
        watch: {
            isCollapsed() {
                if (this.isCollapsed) {
                    this.comName = "hover-drop-down"
                } else {
                    this.comName = "Qside_menu"
                }
            }
        },
        methods: {
            go(name) {
                this.$router.push(name)
            },
            turnToPage (route) {
                let { name, params, query } = {}
                if (typeof route === 'string') name = route
                else {
                    name = route.name
                    params = route.params
                    query = route.query
                }
                if (name.indexOf('isTurnByHref_') > -1) {
                    window.open(name.split('_')[1])
                    return
                }
                this.$router.push({
                    name,
                    params,
                    query
                })
            },
            handleClick (item) {
                this.turnToPage(item)
            },
            handleCloseTag (res, type, route) {
                if (type !== 'others') {
                    if (type === 'all') {
                        this.turnToPage(this.$config.homeName)
                    } else {
                        if (routeEqual(this.$route, route)) {
                            this.closeTag(route)
                        }
                    }
                }
                this.setTagNavList(res)
            },
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            tagNavList () {
                return this.$store.state.app.tagNavList
            },
        },
    }
</script>
