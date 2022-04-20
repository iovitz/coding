<template>
  <div class="user-page">用户名：{{}}</div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { UserInfo } from '@/store'
export default {
  setup() {
    const store = useStore()
    const userInfo = computed < UserInfo > store.state.userInfo
    return {
      userInfo
    }
  },
}
</script>

<style lang="scss" scoped>
.user-page {
  height: 100%;
  width: 100%;
}
</style>
