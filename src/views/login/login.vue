<style >
    html,body {
        margin: 0;
        min-height: 100%;
        width: 100%;
        height: 100%;
        background-size:cover;
        background:url("../../assets/images/gb0-2.jpg")no-repeat center center fixed;
        position: absolute;
        z-index: -1;
        background-size:100% 100%;
    }

    .login {
        width: 100%;
        height: 100%;
        background-color: #1c2438;
        position: relative;
    }
    .login .from-wrap{
        width: 390px;
        margin: 15% auto;
        background-color: #666;
        background-color: rgba(46, 46, 46, 0.61);
        border-radius: 10px;
        color: aliceblue;
        box-shadow: 0px 0px 20px 0px #009688;
        position: fixed;
        left: 50%;
        margin-left: -200px;
        top: 48%;
        margin-top: -163px;
        height: 280px;
        padding: 20px 30px;
        border: 2px solid rgba(242, 242, 242, 0.41);
    }
    .login h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    .login FormItem {
        margin-bottom: 15px;
    }
    .login .form-footer {
        text-align: right;
    }
    .ivu-form-item-required .ivu-form-item-label:before {
        display: none;
    }
    .input1{
        border: 2px solid rgba(242, 242, 242, 0.41);
        background-color: transparent;
        color: wheat;
    }
    .button1{
        border-color: #009688;
        color: #009688;
    }
    .label1{
        color: #ffffff;
        font-size: 18px;
    }
</style>
<template>
    <div class="login">
        <div class="from-wrap">
            <h2>欢迎您,请登录</h2>
            <Form   ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="25">
                <FormItem    prop="acct">
                    <Input class="input1" @on-enter="handleSubmit('loginData')"  v-model="loginData.acct" placeholder="请输入账号" >
                        <Icon type="ios-person-outline" slot="prepend"/>
                    </Input>
                </FormItem>
                <FormItem   prop="pass">
                    <Input class="input1" type="password" :password="loginData.password" @on-enter="handleSubmit('loginData')"  v-model="loginData.pass" placeholder="请输入密码" >
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem class="form-footer">
                    <Button style="border-color: #009688;color: #009688;" :ghost="loginData.ghost"  @keyup.enter.native="handleSubmit('loginData')" @click="handleSubmit('loginData')">Submit</Button>
                    <Button :ghost="loginData.ghost" @click="handleReset('loginData')" style="margin-left: 8px;border-color: #009688;color: #009688;">Reset</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import axios from "@/libs/api.request";
    export default {
        data () {
            return {
                loginData: {
                    ghost:true,
                    password:true,
                    acct:'',
                    pass:''
                },
                ruleValidate: {
                    acct: [
                        { required: true, message: '账号不能为空', trigger: 'blur' },
                        { min: 5, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { min: 5, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        axios.request({
                            url: '/api/login',//请求的地址
                            method: 'post',//请求的方式
                            data: this.formInline//请求的表单数据
                        }).then(res => {
                            console.info('后台返回的数据', res.data);
                        }).catch(err => {
                            console.info('报错的信息', err.response.message);
                        });
                    } else {
                        this.$Message.error('表单验证失败!')
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },

    }
</script>