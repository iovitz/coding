<template>
	<uni-list-item title="热门分类" rightText="更多" showArrow />
	<view class="topic-types">
		<button class="topic-types-item" size="mini" v-for="{ id, name } in hotNewsType" :key="id">
			{{ name }}
		</button>
	</view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useNewsStore } from '@/store/news.store';
export default defineComponent({
	components: {},
	setup() {
		const newsStore = useNewsStore();
		const hotNewsType = computed(() => newsStore.hotNewsType);
		return {
			hotNewsType,
		};
	},
	methods: {},
});
</script>

<style lang="scss" scoped>
.topic-types {
	display: flex;
	justify-content: space-between;
	padding: 10upx 30upx;
	.topic-types-item {
		padding: 0.1em 0.5em;
		background: #fff;
		border-radius: 4px;
	}
}
</style>
