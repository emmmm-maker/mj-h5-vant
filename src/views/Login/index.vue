<template>
  <div>
    <van-nav-bar title="登录" />
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
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div>
      <a class="register" href="#/register">注册账号</a>
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
    async onSubmit (values) {
      await this.$store.dispatch('user/login', values)
      this.$toast.success('登录成功')
      this.$router.push('/article')
    }
  }
}
</script>

<style lang='less' scoped>
.register {
  font-size: 12px;
  padding-right: 18px;
  color: #069;
  float: right;
}
</style>
