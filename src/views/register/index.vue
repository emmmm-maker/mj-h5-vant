<template>
  <div>
    <van-nav-bar title="注册账号" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },{pattern:/^[0-9A-Za-z]{5,}$/,message:'用户名长度至少为5个字符'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern:/^[0-9A-Za-z]{6,}$/,message:'密码长度至少为6个字符'}]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <div>
      <a class="login" href="#/login">有账号,去登录</a>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (value) {
      console.log('注册', value)
      await userRegister(value)
      this.$toast.success('注册成功!')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  font-size: 12px;
  padding-right: 18px;
  color: #069;
  float: right;
}
</style>
