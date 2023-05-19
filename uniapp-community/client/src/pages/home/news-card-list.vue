<template>
	<scroll-view
		scroll-y="true"
		style="height: 100%"
		refresher-enabled
		@scrolltolower="handleLoadMore"
		refresher-background="#eee"
		:refresher-triggered="refreshFlag"
		:refresher-threshold="50"
		@refresherrefresh="handleRefresh"
	>
		<view>
			<view class="news-card-list">
				<news-card v-for="i in 10" :key="i"></news-card>
			</view>
		</view>
	</scroll-view>
</template>

<script lang="ts">
import NewsCard from '@/comps/news-card/news-card.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		id: {
			type: Number,
		},
		name: {
			type: String,
		},
	},
	data() {
		return {
			refreshFlag: false,
		};
	},
	methods: {
		handleRefresh() {
			this.refreshFlag = true;
			console.log('下拉刷新');
			setTimeout(() => {
				this.refreshFlag = false;
			}, 1000);
		},
		handleLoadMore() {
			console.log('加载更多');
		},
	},
	components: { NewsCard },
});
</script>

<style lang="scss" scoped></style>
