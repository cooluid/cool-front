<template>
	<div class="layui-container flex">
		<div class="layui-row font pd3">确定更新账号为：{{ username }}吗？</div>
		<div class="layui-row">
			<button
				type="button"
				class="layui-btn"
				:class="{ 'layui-btn-disable': isSend }"
				@click="submit"
			>
				确定更新
			</button>
			<router-link class="layui-btn layui-btn-primary" to="/"
				>返回首页</router-link
			>
		</div>
	</div>
</template>

<script>
import { updateUsername } from "@/api/user";
export default {
	name: "confirm",
	data() {
		return {
			username: "",
			obj: null,
			isSend: false,
		};
	},
	mounted() {
		let queryStr = window.location.href.replace(/.*\?/, "");
		this.obj = Object.fromEntries(queryStr.split("&").map((v) => v.split("=")));
		this.username = decodeURIComponent(this.obj.username);
	},
	methods: {
		submit() {
			this.obj.username = this.username;
			updateUsername(this.obj).then((res) => {
				if (res.code === 200) {
					this.isSend = true;
                    this.$alert("更新成功");
					setTimeout(() => {
						this.$router.push("/");
					}, 1000);
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.flex {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	min-height: 260px;
}
.font {
	font-size: 16px;
	color: #333;
}
</style>
