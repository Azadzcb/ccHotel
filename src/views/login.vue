<template>
    <div class="page-login">
        <div class="login-main">
            <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form">
                <el-form-item prop="hotelid">
                    <el-input type="text" v-model="loginForm.hotelid" placeholder="请输入酒店编号"></el-input>
                </el-form-item>

                <el-form-item prop="username">
                    <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
                    </el-input>
                </el-form-item>

                <el-form-item prop="pass">
                    <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="请输入密码">
                    </el-input>
                </el-form-item>

                <el-form-item prop="code">
                    <el-input type="text" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <el-button class="login-button" type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'login',
        data() {
            // var validateHotelId = (rule, value, callback) =>{
            //     if (value === '') {
            //         callback(new Error('请输入酒店编号'));
            //     }
            //     callback();
            // };
            // var validatePass = (rule, value, callback) => {
            //     if (value === '') {
            //         callback(new Error('请输入密码'));
            //     }
            //     callback();
            // };
            return {
                loginForm: {
                    hotelid: '',
                    username: '',
                    pass: '',
                    code: ''

                },
                rules: {
                    hotelid: [
                        { required: true, message: '请输入酒店编号', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            };


        },
        methods: {
            submitForm() {
                this.$router.push('/vipQuery')
            }
        }
    }
</script>

<style>
    .page-login {
        background-color: #f0f2f5;
        height: 100%;
    }

    .login-main {
        width: 280px;
        position: relative;
        margin: 0 auto;
        top: 40%;
        transform: translateY(-50%);
        background-color: white;
        padding: 20px;

    }

    /* .login-form{
       
    } */
    .login-button {
        width: 80%;
    }
</style>