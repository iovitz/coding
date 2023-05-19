<template>
	<view class="discover-page">
		<view class="header-tabs">
			<text
				v-for="{ id, name } in tabNames"
				:key="id"
				@tap="switchTab(id)"
				:class="
					classnames({
						active: id === currentTabId,
					})
				"
			>
				{{ name }}</text
			>
		</view>
		<swiper
			class="swiper"
			circular
			duration="100"
			:current="currentTabId"
			@change="handleScrollTab"
			:style="{
				height: swiperHeight + 'px',
			}"
		>
			<swiper-item key="0">
				<scroll-view scroll-y="true" style="height: 100%">
					<follows></follows>
				</scroll-view>
			</swiper-item>
			<swiper-item key="1">
				<scroll-view scroll-y="true" style="height: 100%">
					<topic></topic>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts">
import classNames from 'classnames';
import { defineComponent, computed } from 'vue';
import { useNewsStore } from '@/store/news.store';
import Follows from './follows.vue';
import Topic from './topic.vue';
export default defineComponent({
	components: {
		Follows,
		Topic,
	},
	data() {
		return {
			swiperHeight: 300,
			currentTabId: 0,
			tabNames: [
				{
					id: 0,
					name: '关注',
				},
				{
					id: 1,
					name: '话题',
				},
			],
		};
	},
	setup() {
		const newsStore = useNewsStore();
		const newsType = computed(() => newsStore.newsType);
		return {
			newsType,
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: (res) => {
				this.swiperHeight = res.windowHeight - 40;

				// #ifdef H5
				this.swiperHeight -= 100;
				// #endif
			},
		});
	},
	methods: {
		classnames: classNames,
		switchTab(id: number) {
			this.currentTabId = id;
		},
		handleScrollTab(e: any) {
			this.currentTabId = e.detail.current;
		},
	},
});
</script>

<style lang="scss" scoped>
.header-tabs {
	width: 100%;
	font-weight: 32upx;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80upx;
	background-color: #fff;
	& > text {
		margin-right: 0.5em;
		display: inline-block;
		padding: 0.5em 1em;
		color: #999;
		&.active {
			color: #007aff;
			font-weight: bold;
			font-size: 1.1em;
		}
		&:last-child {
			margin-right: 0;
		}
	}
}
</style>
