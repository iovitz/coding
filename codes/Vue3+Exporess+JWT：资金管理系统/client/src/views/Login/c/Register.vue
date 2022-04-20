<template>
  <el-form
    :rules="rules"
    :model="data"
    ref="form"
    label-width="70px"
    label-position="left"
  >
    <el-form-item label="Nickname" prop="name">
      <el-input v-model.trim="data.name"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model.trim="data.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model.trim="data.password"></el-input>
    </el-form-item>
    <el-form-item label="Repeat" prop="passwordRepeat">
      <el-input type="password" v-model.trim="data.passwordRepeat"></el-input>
    </el-form-item>
    <el-form-item label="Repeat">
      <el-select v-model="data.identity" placeholder="Select">
        <el-option :value="0" label="普通用户"></el-option>
        <el-option :value="1" label="管理员"></el-option>
      </el-select>
    </el-form-item>
    <el-button class="button" type="primary" @click="submit"
      >Register</el-button
    >
  </el-form>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      identity: 0
    })

    const rules = {
      name: {
        validator: (r, v, c) => {
          if (v === '') {
            c(new Error('昵称不能为空'))
          } else if (v.length < 6 || v.length > 25) {
            c(new Error('昵称长度在6~20位之间'))
          } else {
            c()
          }
        },
        trigger: 'blur',
      },
      email: [
        { type: 'email', message: '请输入正确的邮箱格式' },
        {
          validator: (r, v, c) => {
            if (v === '') {
              c(new Error('邮箱不能为空'))
            } else if (v.length < 6 || v.length > 25) {
              c(new Error('账号格式不对'))
            } else {
              c()
            }
          },
          trigger: 'blur',
        },
      ],
      password: {
        validator: (r, v, c) => {
          if (v === '') {
            c(new Error('密码不能为空'))
          } else if (v.length < 6 || v.length > 16) {
            c(new Error('密码长度在6~16位之间'))
          } else {
            c()
          }
        },
        trigger: 'blur',
      },
      passwordRepeat: {
        validator: (r, v, c) => {
          if (v !== data.password) {
            c(new Error('两次密码不一致'))
          } else {
            c()
          }
        },
        trigger: 'blur',
      },
    }

    return {
      data,
      rules,
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((isPass: boolean) => {
        if (isPass) {
          // console.log(this.data)
          this.$http.post('/api/users/register', {
            name: this.data.name,
            email: this.data.email,
            password: this.data.password,
            identity: this.data.identity
          }).then(res => {
            if(res.status === 200) {
              ElMessage({
                message: '注册成功',
                type: 'success'
              })
              this.$refs.form.resetFields()
            }
          })
        } else {
          console.log('error')
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>
