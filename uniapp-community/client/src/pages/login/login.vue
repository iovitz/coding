<template>
	<view class="login-page">
		<view class="login-wrapper">
			<PasswordLogin v-if="loginType === 'password'"></PasswordLogin>
			<PhoneLogin v-if="loginType === 'phone'"></PhoneLogin>
			<view class="options">
				<a @tap="handleSwitchLoginType">
					{{ loginType === 'password' ? '手机号登录' : '账号密码登录' }}</a
				>
				| <a>登录遇到问题</a>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import PhoneLogin from './phone-login.vue';
import PasswordLogin from './password-login.vue';
import { ref } from 'vue';
const loginType = ref('phone');

const handleSwitchLoginType = () => {
	if (loginType.value === 'password') {
		loginType.value = 'phone';
	} else {
		loginType.value = 'password';
	}
};
</script>

<style lang="scss" scoped>
.login-page {
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	box-sizing: border-box;
	padding: 30upx;
}
.login-wrapper {
	width: 100%;
	margin-top: 100upx;
}
.login-title {
	font-size: 60upx;
	text-align: center;
	margin-bottom: 60upx;
}
.login-input-wrapper {
	margin-bottom: 30upx;
}
.options {
	margin-top: 100upx;
	text-align: center;
	& > text {
		color: #e15f41;
	}
}
</style>
