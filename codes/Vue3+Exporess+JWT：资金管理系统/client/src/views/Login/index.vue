<template>
  <div class="mask">
    <div class="form-box">
      <div class="tab-name">
        {{ isLogin ? 'Login' : 'Register' }}
      </div>
      <Login v-if="isLogin"></Login>
      <Register v-else></Register>
      <p class="links">
        <a v-if="isLogin" href="javascript:void(0)" @click="switchTab('register')">没有账号？立即注册</a>
        <a v-else href="javascript:void(0)" @click="switchTab('login')">已有账号？立即登录</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import Login from './c/Login.vue';
import Register from './c/Register.vue';

export default defineComponent({
  components: {
    Login,
    Register
  },
  setup() {
    const isLogin = ref(true);

    const switchTab = (tabName) => {
      if (tabName === 'login') {
        isLogin.value = true;
      } else if (tabName === 'register') {
        isLogin.value = false;
      } else {
        throw new Error(`${tabName} Not Found`)
      }
    };
    return {
      isLogin,
      switchTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #00f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
  .form-box {
    width: 350px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  }
  .tab-name {
    font-size: 2em;
    text-align: center;
    padding-bottom: 0.5em;
  }
  .links {
    padding: 10px 0;
    text-align: center;
  }
}
</style>
