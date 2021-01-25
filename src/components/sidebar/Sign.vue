<template>
	<div class="fly-panel fly-signin">
		<div class="fly-panel-title">
			签到
			<i class="fly-mid"></i>
			<a
				href="javascript:;"
				class="fly-link"
				id="LAY_signinHelp"
				@click="showInfo()"
				>说明</a
			>
			<i class="fly-mid"></i>
			<a
				href="javascript:;"
				class="fly-link"
				id="LAY_signinTop"
				@click="showActive()"
				>活跃榜<span class="layui-badge-dot"></span
			></a>
			<span class="fly-signin-days" v-show="isSign && isLogin"
				>已连续签到<cite>{{ count }}</cite
				>天</span
			>
		</div>
		<div class="fly-panel-main fly-signin-main">
			<template v-if="!isLogin">
				<button
					class="layui-btn layui-btn-danger"
					id="LAY_signin"
					@click="sign()"
				>
					今日签到
				</button>
				<span
					>可获得<cite>{{ fav }}</cite
					>飞吻</span
				>
			</template>
			<template v-else>
				<!-- 已签到状态 -->
				<button class="layui-btn layui-btn-disabled">
					今日已签到
				</button>
				<span
					>获得了<cite>{{ fav }}</cite
					>飞吻</span
				>
			</template>
		</div>
		<sign-info @closeModal="close()" :isShow="isShow"></sign-info>
		<sign-list @closeModal="close()" :isShow="showList"></sign-list>
	</div>
</template>

<script>
import SignInfo from "./SignInfo.vue";
import SignList from "./SignList.vue";
import { userSign } from "@/api/user";
import moment from "dayjs";
export default {
	name: "sign",
	data() {
		return {
			isShow: false,
			showList: false,
			isSign: false,
		};
	},
	mounted() {
		const user = this.$store.state.userInfo;
		const isSign = user ? user.isSign : false;
		const lastSign = user ? user.lastSign : 0;
		const nowDate = moment().format("YYYY-MM-DD");
		const lastDate = moment(lastSign).format("YYYY-MM-DD");
		const diff = moment(nowDate).diff(moment(lastDate), "day");
		if (diff > 0 && isSign) {
			this.isSign = false;
		} else {
			this.isSign = isSign;
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.isLogin;
		},
		count() {
			return this.$store.state.userInfo ? this.$store.state.userInfo.count : 0;
		},
		fav() {
			let fav = 0;
			const cnt = this.$store.state.userInfo
				? this.$store.state.userInfo.count
				: 0;

			if (cnt < 5) {
				fav = 5;
			} else if (cnt >= 5 && cnt < 15) {
				fav = 10;
			} else if (cnt >= 15 && cnt < 30) {
				fav = 15;
			} else if (cnt >= 30 && cnt < 100) {
				fav = 20;
			} else if (cnt >= 100 && cnt < 365) {
				fav = 30;
			} else if (cnt >= 365) {
				fav = 50;
			}
			return fav;
		},
	},
	components: {
		SignList,
		SignInfo,
	},
	methods: {
		showInfo() {
			this.isShow = true;
		},
		showActive() {
			this.showList = true;
		},
		close() {
			this.isShow = false;
			this.showList = false;
		},
		sign() {
			if (!this.isLogin) {
				this.$pop("shake", "请先登录");
				return;
			}
			userSign().then((res) => {
				let user = this.$store.state.userInfo;
				if (res.code === 200) {
					user.favs = res.favs;
					user.count = res.count;
					this.$pop("", "签到成功");
				} else {
					this.$pop("", "您已经签到");
				}
				this.isSign = true;
				user.isSign = true;
				user.lastSign = res.lastSign;
				this.$store.commit("setUserInfo", user);
			});
		},
	},
};
</script>

<style lang="scss">
@keyframes bounceIn {
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
.mask {
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 20000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.layui-layer {
	z-index: 21000;
	position: fixed;
	width: 300px;
	height: 480px;
	top: 50%;
	left: 50%;
	margin-top: -240px;
	margin-left: -150px;
	background: #fff;
	&.active {
		animation-fill-mode: both;
		animation-duration: 0.2s;
		animation-name: bounceIn;
	}
	.layui-layer-title {
		height: 42px;
		line-height: 42px;
		padding: 0 20px;
		color: #333;
		background-color: #f8f8f8;
	}
	.layui-layer-content {
		padding: 20px;
	}
}
.layui-tab-content {
	padding: 0 10px;
}
.layui-tab-item {
	line-height: 45px;
	li {
		border-bottom: 1px dotted #dcdcdc;
		&:last-child {
			border-bottom: none;
		}
	}
	img {
		width: 30px;
		height: 30px;
		border-radius: 2px;
	}
}
</style>
