<template>
  <header class="head-nav">
    <h1 class="logo">账单管理</h1>
    <span
      >欢迎回来，<u>{{ userInfo.name }}</u></span
    >
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img class="avatar" :src="userInfo.avatar" alt="123" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="toUser" icon="el-icon-plus">
            {{ userInfo.name }}
          </el-dropdown-item>
          <el-dropdown-item @click="logOut" icon="el-icon-circle-plus"> Log Out </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const userInfo = computed(() => store.state.userInfo)

    const logOut = () => {
      localStorage.removeItem('token')
      store.dispatch('SET_AUTHENTICATED')
      router.replace('/login')
    }
    const toUser = () => {
      router.replace('/user')
    }
    return {
      userInfo,
      logOut,
      toUser
    }
  },
})
</script>

<style class="scss" scoped>
.head-nav {
  height: 50px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 1px solid #dedede;
}
.logo {
  font-size: 1.3em;
  margin-right: auto;
}
img.avatar {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0 20px;
}
</style>
