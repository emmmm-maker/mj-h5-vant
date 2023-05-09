<template>
  <div>
    <van-nav-bar title="注册账号" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
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
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (value) {
      console.log('注册', value)
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
