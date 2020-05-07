<template>
    <Layout>
        <!-- header -->
        <Header>
            <selfheader></selfheader>
        </Header>

        <!-- body -->
        <Layout>
            <Sider>
                <authmenu></authmenu>
            </Sider>
            <Layout>
                <curpos></curpos><!-- 当前位置 -->
                <div style="height: 100%;width: 100%;">
                    <authwelcome v-if="choose.link0"></authwelcome>
                </div>
            </Layout>
        </Layout>
    </Layout>
</template>