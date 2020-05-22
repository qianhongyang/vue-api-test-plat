<template>
    <div>
        <Submenu  name="1">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>{{ $t("home.nav.Item1.I") }}</span>
            </template>
                <MenuItem name="1-1" to="about">
                    {{ $t("home.nav.Item1.option1") }}
                </MenuItem>
                <MenuItem name="1-2" to="test">
                    test
                </MenuItem>
        </Submenu>
        <Submenu  name="2">
            <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>{{ $t("home.nav.Item2.I") }}</span>
            </template>
            <MenuItem name="2-1">{{ $t("home.nav.Item2.option1") }}</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>{{ $t("home.nav.Item3.I") }}</span>
            </template>
            <MenuItem class="layout-con" name="3-1">
                <Icon type="ios-analytics"></Icon>
                <span>{{ $t("home.nav.Item3.option1") }}</span>
            </MenuItem>
        </Submenu>
    </div>

</template>

<script>
    export default {
        name: "Qside_menu",
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