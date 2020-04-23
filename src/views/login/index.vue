<template>
  <div class="login">
    <div class="logo">
      <img :src="logo" alt />
    </div>
    <!-- form表单内容区域 -->
    <div class="form-box">
      <div class="input-form border-1-px-bottom">
        <input type="text" v-model="loginForm.phone" placeholder="请输入手机号" @input="setValue" />
      </div>
      <div class="input-form border-1-px-bottom">
        <input type="number" class="mr-auto flex-auto" v-model="loginForm.code" placeholder="验证码" />
        <van-button
          plain
          :disabled="isDisabled"
          :class="{'text-primary':!isDisabled}"
          size="small"
          hairline
          @click="getVerifyCode"
        >获取验证码</van-button>
      </div>
    </div>
    <div class="login_des mt-2">
      <p>
        新用户登录即自动注册，表示已同意
        <span class="text-primary">《用户服务协议》</span>
      </p>
    </div>
    <div class="mt-2">
      <van-button round block type="info" @click="submit">登录</van-button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../../components/InputGroup";
export default {
  name: "login",
  components: {
    InputGroup
  },
  data() {
    return {
      loginForm: {
        phone: "",
        code: ""
      },
      btnTitle: "获取验证码",
      disabled: false,
      errors: {},
      logo: require("../../assets/logo.jpg"),
      isDisabled: true
    };
  },
  computed: {},
  methods: {
    setValue(e) {
      if (e.target.value.length == "11") this.isDisabled = false;
    },
    // getVerifyCode 获取验证码
    getVerifyCode() {},
    submit() {
      console.log('3333')
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  padding-top: 30px;
  .logo {
    text-align: center;
    img {
      width: 150px;
    }
  }
  .input-form {
    display: flex;
    align-items: center;
    height: 50px;
    input {
      height: 40px;
      border: none;
      font-size: 14px;
    }
  }
  .login_des {
    font-size: 14px;
  }
}
</style>