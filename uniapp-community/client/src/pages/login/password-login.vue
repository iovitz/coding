<template>
	<view class="login-title">账号密码登录</view>
	<view class="login-input-wrapper">
		<view class="login-input-wrapper">
			<input class="uni-input" maxlength="11" placeholder="手机号" />
		</view>
		<view class="login-input-wrapper">
			<input type="password" class="uni-input" maxlength="11" placeholder="密码" />
		</view>
	</view>

	<button type="primary">登录</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

let timer: number = 0;

export default defineComponent({
	props: {
		type: String,
	},
	data() {
		return {
			countDown: 0,
		};
	},
	computed: {
		isSendVerifyCodeDisable() {
			return this.countDown !== 0;
		},
		sendVerifyCodeText() {
			return this.countDown === 0 ? '发送验证码' : `${this.countDown}秒后重试`;
		},
	},
	methods: {
		handleSendVerifyCode() {
			if (this.countDown !== 0) {
				return;
			}
			console.log('jishi');
			this.countDown = 60;
			timer = setInterval(() => {
				this.countDown--;
				if (this.countDown === 0) {
					clearInterval(timer);
				}
			}, 1000);
		},
	},
});
</script>

<style lang="scss" scoped>
.login-title {
	font-size: 60upx;
	text-align: center;
	margin-bottom: 60upx;
}
.login-input-wrapper {
	margin-bottom: 30upx;
}
</style>
