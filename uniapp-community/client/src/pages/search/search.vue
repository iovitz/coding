<template>
	<view class="search-page">
		<view class="search-header">
			<uni-search-bar
				class="search"
				radius="5"
				v-model="searchText"
				placeholder="你想要的都在这里"
				cancelButton="none"
				@change="handleSearchInput"
			/>
		</view>

		<view class="search-recomment-list" v-if="searchText">
			<uni-list>
				<uni-list-item
					v-for="(item, index) in searchRecomment"
					:title="item"
					:key="index"
					clickable
					link
				></uni-list-item>
			</uni-list>
		</view>
		<view class="recomment-tags-wrapper" v-else>
			<uni-tag
				v-for="(item, key) in recommentSearchList"
				class="recomment-tag"
				@tap="handleRecommentTagClick"
				:text="item"
				type="primary"
				:inverted="true"
				:key="key"
			></uni-tag>
		</view>
	</view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			searchText: '',
			recommentSearchList: [
				'日常推荐',
				'黑化肥会挥发发黑',
				'缴费阿尔法',
				'寄快递哦哦拍',
				'寄快递哦哦拍',
			],
			searchRecomment: [
				'日常推荐',
				'黑化肥会挥发发黑',
				'缴费阿尔法',
				'寄快递哦哦拍',
				'寄快递哦哦拍',
				'日常推荐',
				'黑化肥会挥发发黑',
				'缴费阿尔法',
				'寄快递哦哦拍',
				'寄快递哦哦拍',
			],
		};
	},
	methods: {
		handleRecommentTagClick() {
			console.log('前往搜索结果');
		},
		handleSearchInput() {
			console.log('输入内容');
		},
	},
});
</script>

<style lang="scss" scoped>
.search-page {
	height: 100%;
	width: 100%;
	background-color: #fff;
	box-sizing: border-box;
	.search-header {
		padding: 30upx;
	}
	.search {
		padding: 0;
	}
	.recomment-tags-wrapper {
		padding: 0 30upx;
		line-height: 2em;
		.recomment-tag {
			margin-right: 20upx;
			margin-bottom: 20upx;
			white-space: nowrap;
		}
	}
}
</style>
