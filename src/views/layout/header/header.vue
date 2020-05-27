<template>
    <div>
        <Header style="padding: 0 23px;" >
            <Menu mode="horizontal" theme="dark" :active-name="activeName">
                <div><span class="plat_name_style">{{ $t("home.title") }}</span></div>
                <div class="layout-nav">
                    <div class="user_control">
                        <Dropdown>
                            <MenuItem name="2" style="transform: translateY(-10px)">
                                <div>
                                    <Icon type="ios-color-palette-outline" size="20" style="transform: translateY(3px)"/>
                                    <span style="transform: translateY(5px)">主题切换</span>
                                </div>
                            </MenuItem>
                            <DropdownMenu slot="list">
                                <DropdownItem>dark</DropdownItem>
                                <DropdownItem>light</DropdownItem>
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

    export default {
        name: "Qheader",
        components: {
            Qavatar: avatar,
        },

        data() {
            return {
                userName: "Dean",
                activeName: this.$route.path
            }
        },
        methods: {
            logout() {
                this.$router.push("/")  //退出到登录界面
            },
        },
        watch: {
            '$route'() {
                this.activeName = this.$route.path
            }
        }
    }
</script>

<style scoped>
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

    .plat_name_style {
        font-weight: bold;
        font-size: 23px;
        color: #f8f8f9;
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