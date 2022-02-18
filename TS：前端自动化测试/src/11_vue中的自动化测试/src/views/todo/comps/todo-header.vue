<template>
  <header>
    <h1 class="logo" />
    <input
      v-model="searchText"
      class="search-text"
      type="text"
    >
    <button @keyup.enter="handleClick" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  emits: ['add'],
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    handleClick() {
      if(this.searchText) {
        this.$emit('add', this.searchText)
      }
    }
  }
})
</script>
