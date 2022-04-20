<template>
  <head-nav></head-nav>
  <div class="page">
    <left-bar></left-bar>
    <div class="page-inner fn-no_scroll">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import jwtDecode from 'jwt-decode'
import { mapActions, useStore } from 'vuex'
import { defineComponent } from 'vue'
import { UserInfo } from 'store/'
import { isEmpty } from 'utils/tools'
import HeadNav from 'components/HeadNav.vue'
import LeftBar from 'components/LeftBar.vue'

export default defineComponent({
  components: { HeadNav, LeftBar },
  methods: {
    ...mapActions(['SET_USERINFO', 'SET_AUTHENTICATED']),
  },
  setup() {
    const token = localStorage.token
    const store = useStore()
    if (token) {
      const decodedToken = jwtDecode<UserInfo>(token)
      store.dispatch('SET_USERINFO', {
        name: decodedToken.name,
        avatar: decodedToken.avatar,
        identity: decodedToken.identity,
      })
      store.dispatch('SET_AUTHENTICATED', isEmpty(decodedToken))
    }
  },
})
</script>

<style lang="scss" scoped>
@import './styles/units.scss';
.page {
  height: 100%;
  display: flex;
}
.page-inner {
  flex: 1;
  padding: 15px;
}
</style>
