<template>
    <div>
        <Header :class="HeaderClasses">
            <Menu style="height: 64px;" mode="horizontal" :theme="theme" :active-name="activeName">
                <div><span :class="PlatNameClass">{{ $t("home.title") }}</span></div>
                <div class="layout-nav">
                    <div class="user_control">
                        <Dropdown>
                            <MenuItem name="2" style="transform: translateY(-10px)">
                                <div>
                                    <Icon type="ios-color-palette-outline" size="20"
                                          style="transform: translateY(3px)"/>
                                    <span style="transform: translateY(5px)">主题切换</span>
                                </div>
                            </MenuItem>
                            <DropdownMenu slot="list">
                                <DropdownItem @click.native="changMyTheme('dark')">dark</DropdownItem>
                                <DropdownItem @click.native="changMyTheme('light')">light</DropdownItem>
                                <DropdownItem @click.native="changMyTheme('green')">green</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown style="transform: translateY(-12px)">

                            <div>
                                <Qavatar/>
                            </div>
                            <DropdownMenu slot="list">
                                <DropdownItem>个人信息</DropdownItem>
                                <DropdownItem>打赏作者</DropdownItem>
                                <DropdownItem>修改密码</DropdownItem>
                                <DropdownItem divided @click.native="logout">
                                    <Icon type="md-power"/>
                                    退出登录
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </Menu>
        </Header>
    </div>
</template>

<script>
    import avatar from "@/views/avatar/avatar";
    import theme from "@/store/modules/theme";

    const prefixCls = 'layout-theme-';
    export default {
        name: "Qheader",
        components: {
            Qavatar: avatar,
        },
        mounted() {
            console.log(this.$store.getters.getMythemeStorage);
            // this.$store.commit('ChangMyThemeState', this.$store.getters.getMytheme);
        },
        data() {
            return {
                userName: "Dean",
                activeName: this.$route.path,
                theme: "dark",
            }
        },
        methods: {
            select_theme() {
                if (this.$store.getters.getMythemeStorage) {
                     this.theme=this.$store.getters.getMythemeStorage
                } else {
                    this.theme=this.$store.getters.getMytheme
                }
            },
            logout() {
                this.$router.push("/")  //退出到登录界面
            },
            changMyTheme(color) {
                console.log("你已经点了", color);
                // this.$store.commit('ChangMyThemeState', color);
                // this.$router.go(0)
                this.theme=color
            },
        },
        computed: {
            /**
             * @return {string}
             */
            HeaderClasses() {
                return `${prefixCls}` + this.theme;
            },
            /**
             * @return {string}
             */
            PlatNameClass() {
                return 'plat-name-style-' + this.theme;
            }
        },
        watch: {
            '$route'() {
                this.activeName = this.$route.path
            }
        }
    }
</script>

<style scoped>
    .layout-theme-dark {
        padding: 0 23px;
        background-color: #51596E;
    }

    .layout-theme-light {
        padding: 0 23px;
        background-color: #ffffff;
    }

    .layout-theme-green {
        padding: 0 23px;
        background-color: #1ab5af;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: url(/src/assets/images/error-page/cute_girl.jpeg) center center fixed;;
        border-radius: 10px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 20px 0 auto;
    }

    .plat-name-style-dark {
        font-weight: bold;
        font-size: 23px;
        color: #f8f8f9;
    }

    .plat-name-style-green {
        font-weight: bold;
        font-size: 23px;
        color: #f8f8f9;
    }

    .plat-name-style-light {
        font-weight: bold;
        font-size: 23px;
        color: #191f129c;
    }

    .user_control {
        float: right;
        margin-left: -100px;
        margin-top: -35px;
        line-height: 10px;
        font-weight: bold;
        font-size: 18px;
    }
</style>