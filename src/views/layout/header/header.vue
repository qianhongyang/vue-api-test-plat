<template>
    <div>
        <Header style="padding: 0 23px">
            <Menu mode="horizontal" theme="dark" :active-name="activeName">
                <div><span class="plat_name_style">{{ $t("home.title") }}</span></div>
                <div class="layout-nav">
                    <div class="user_control">
                        <MenuItem name="1">
                            <Icon type="person"></Icon>
                            {{userName}}
                        </MenuItem>
                        <MenuItem name="2" @click.native="logout">
                            <Icon type="power"></Icon>
                            退出
                        </MenuItem>
                    </div>
                </div>
            </Menu>
        </Header>
    </div>
</template>

<script>
    export default {
        name: "Qheader",
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