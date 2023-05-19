<template>
	<newsCardList></newsCardList>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import NewsCardList from '../home/news-card-list.vue';
import { useNewsStore } from '@/store/news.store';
export default defineComponent({
	components: {
		NewsCardList,
	},
	setup() {
		const newsStore = useNewsStore();
		const newsType = computed(() => newsStore.newsType);
		return {
			newsType,
		};
	},
	methods: {},
});
</script>

<style lang="scss" scoped></style>
