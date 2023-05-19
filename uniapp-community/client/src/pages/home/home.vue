<template>
	<view class="home-page page-container">
		<view class="header">
			<view class="search-wrapper">
				<uni-search-bar
					class="search"
					radius="5"
					placeholder="你想要的都在这里"
					cancelButton="none"
					@tap="handleGoSearch"
				/>
				<uni-icons type="compose" size="30" @tap="handleGoPublish"></uni-icons>
			</view>
			<scroll-view
				scroll-x="true"
				class="home-tab-bar-scroll"
				:scroll-into-view="currentScrollViewId"
				:show-scrollbar="true"
			>
				<view
					class="home-tab-bar-scroll-item"
					:class="
						classnames({
							active: tabCurrentSelected === id,
						})
					"
					v-for="{ id, name } in newsType"
					:key="id"
					@tap="handleSwitchTab(id)"
					:id="getScrollViewId(id)"
				>
					{{ name }}
				</view>
			</scroll-view>
		</view>

		<swiper
			class="swiper"
			circular
			duration="100"
			:current="tabCurrentSelected"
			@change="handleScrollTab"
			:style="{
				height: swiperHeight + 'px',
			}"
		>
			<swiper-item v-for="(item, index) in newsType" :key="index">
				<scroll-view scroll-y="true" style="height: 100%">
					<newsCardList :id="item.id + 1" :name="item.name"></newsCardList>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import NewsCardList from './news-card-list.vue';
import classnames from 'classnames';
import { useNewsStore } from '@/store/news.store';

export default defineComponent({
	data() {
		return {
			swiperHeight: 300,
			tabCurrentSelected: 0,
		};
	},
	setup() {
		const newsStore = useNewsStore();

		const newsType = computed(() => [
			{
				id: 0,
				name: '关注',
			},
			...newsStore.newsType,
		]);
		return {
			newsType,
		};
	},
	computed: {
		currentScrollViewId() {
			return this.getScrollViewId(this.tabCurrentSelected);
		},
	},
	onLoad() {
		uni.getSystemInfo({
			success: (res) => {
				this.swiperHeight = res.windowHeight - uni.upx2px(200);

				// #ifdef H5
				this.swiperHeight -= 100;
				// #endif
			},
		});
	},
	methods: {
		classnames,
		getScrollViewId(id: number) {
			return 'tab-' + id;
		},
		handleGoSearch() {
			uni.navigateTo({
				url: '/pages/search/search',
				animationType: 'slide-in-right',
				animationDuration: 500,
			});
		},
		handleGoPublish() {
			uni.navigateTo({
				url: '/pages/publish/publish',
				animationType: 'slide-in-right',
				animationDuration: 500,
			});
		},
		handleSwitchTab(id: number) {
			this.tabCurrentSelected = id;
		},
		handleScrollTab(item: any) {
			console.log(item);

			this.tabCurrentSelected = item.detail.current;
		},
		handleSearch() {},
	},
	components: { NewsCardList },
});
</script>

<style lang="scss" scoped>
.home-page {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	.search-wrapper {
		display: flex;
	}
	.search {
		flex: 1;
		padding: 0;
	}
	.header {
		background-color: #fff;
		height: 200upx;
		padding: 20upx 30upx;
		box-sizing: border-box;
	}
}
.home-tab-bar-scroll {
	width: 100%;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	overflow: hidden;
	.home-tab-bar-scroll-item {
		display: inline-block;
		padding: 0.5em;
		&.active {
			font-weight: bold;
			font-size: 1.1em;
			color: #007aff;
		}
	}
}
</style>
