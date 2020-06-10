<template>
    <div>
        <Qmenu :sub="sub1"/>
        <Qmenu :sub="sub2"/>
        <Qmenu :sub="sub3"/>
    </div>

</template>

<script>
    import Qmenu from "@/components/Qmenu";

    export default {
        name: "Qside_menu",
        components: {Qmenu},
        props: {
            disabled: {
                default: false,
                type: Boolean,
            }
        },
        data() {
            return {
                sub1: {
                    name: "sub1",
                    icon_type: "ios-navigate",
                    menu_name: this.$t("home.nav.Item1.I"),
                    path_list: [
                        {
                            path: "my_report",
                            option: this.$t("home.nav.Item1.option1")
                        },
                        {
                            path: "projects",
                            option: this.$t("home.nav.Item1.option2")
                        },
                        {
                            path: "modules",
                            option: this.$t("home.nav.Item1.option3")
                        }
                    ],
                },
                sub2: {
                    name: "sub2",
                    icon_type: "ios-keypad",
                    menu_name: this.$t("home.nav.Item2.I"),
                    path_list: [
                        {
                            path: "1",
                            option: this.$t("home.nav.Item2.option1")
                        }
                    ],
                },
                sub3: {
                    name: "sub3",
                    icon_type: "ios-analytics",
                    menu_name: this.$t("home.nav.Item3.I"),
                    path_list: [
                        {
                            path: "2",
                            option: this.$t("home.nav.Item3.option1")
                        }
                    ],
                },
            }
        }
    }
</script>

<style scoped>
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