<template>
  <el-form :rules="rules" ref="form" :model="data" label-width="70px" label-position="left">
    <el-form-item label="Email" prop="email">
      <el-input v-model.trim="data.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model.trim="data.password"></el-input>
    </el-form-item>
    <el-button class="button" type="primary" @click="submit">Login In</el-button>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions, useStore } from 'vuex';
import { UserInfo } from 'store/';
import { ElMessage } from 'element-plus';
import jwtDeode from 'jwt-decode';
import { isEmpty } from 'utils/tools';

export default defineComponent({
  setup() {
    const data = reactive({
      email: '',
      password: '',
    });

    const rules = {
      email: [
        { type: 'email', message: '请输入正确的邮箱格式' },
        {
          validator: (r, v, c) => {
            if (v === '') {
              c(new Error('邮箱不能为空'));
            } else if (v.length < 6 || v.length > 25) {
              c(new Error('账号格式不对'));
            } else {
              c();
            }
          },
          trigger: 'blur',
        },
      ],
      password: {
        validator: (r, v, c) => {
          if (v === '') {
            c(new Error('密码不能为空'));
          } else if (v.length < 6 || v.length > 25) {
            c(new Error('请输入正确的密码格式'));
          } else {
            c();
          }
        },
        trigger: 'blur',
      },
    };
    return {
      data,
      rules,
      router: useRouter(),
      ...mapActions(['SET_USERINFO', 'SET_AUTHENTICATED']),
    };
  },
  methods: {
    submit() {
      const store = useStore();
      this.$refs.form.validate((isPass: boolean) => {
        if (isPass) {
          this.$http
            .post('/api/users/login', {
              email: this.data.email,
              password: this.data.password,
            })
            .then(({ status, data }) => {
              if (status === 200) {
                const { token } = data;
                // 存储token
                localStorage.setItem('token', token);
                const decodedToken = jwtDeode<UserInfo>(token);
                ElMessage({
                  message: '登录成功',
                  type: 'success',
                });
                this.SET_USERINFO(decodedToken);
                this.SET_AUTHENTICATED(isEmpty(decodedToken));
                this.router.push('index');
                store.dispatch('SET_USERINFO', {
                  name: decodedToken.name,
                  avatar: decodedToken.avatar,
                  identity: decodedToken.identity,
                });
                store.dispatch('SET_AUTHENTICATED', isEmpty(decodedToken));
              }
            });
        } else {
          console.log('error');
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
}
</style>
