<template>
	<div class="layui-container fly-marginTop">
		<div class="fly-panel fly-panel-user" pad20>
			<div class="layui-tab layui-tab-brief" lay-filter="user">
				<ul class="layui-tab-title">
					<li class="layui-this">
						<router-link :to="{ name: 'login' }">登入</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'reg' }">注册</router-link>
					</li>
				</ul>
				<div
					class="layui-form layui-tab-content"
					id="LAY_ucm"
					style="padding: 20px 0;"
				>
					<div class="layui-tab-item layui-show">
						<div class="layui-form layui-form-pane">
							<form method="post">
								<div class="layui-form-item">
									<label class="layui-form-label">用户名</label>
									<div class="layui-input-inline">
										<input
											type="text"
											name="username"
											v-validate="'required|email'"
											placeholder="请输入用户名"
											v-model="userName"
											lay-verify="required"
											autocomplete="off"
											class="layui-input"
										/>
									</div>
									<div class="layui-form-mid">
										<span style="color: #c00;">{{
											errors.first("username")
										}}</span>
									</div>
								</div>
								<div class="layui-form-item">
									<label class="layui-form-label">密码</label>
									<div class="layui-input-inline">
										<input
											type="password"
											name="password"
											v-validate="'required|min:6'"
											placeholder="请输入密码"
											v-model="password"
											lay-verify="required"
											autocomplete="off"
											class="layui-input"
										/>
									</div>
									<div class="layui-form-mid">
										<span style="color: #c00;">{{
											errors.first("password")
										}}</span>
									</div>
								</div>
								<div class="layui-form-item">
									<div class="layui-row">
										<label class="layui-form-label">验证码</label>
										<div class="layui-input-inline">
											<input
												type="text"
												name="code"
												v-validate="'required|length:4'"
												v-model="code"
												lay-verify="required"
												placeholder="请输入验证码"
												autocomplete="off"
												class="layui-input"
											/>
										</div>
										<div>
											<span class="svg" v-html="svg" @click="getCaptcha" />
										</div>
										<div class="layui-form-mid">
											<span style="color: #c00;">{{
												errors.first("code")
											}}</span>
										</div>
									</div>
								</div>
								<div class="layui-form-item">
									<button class="layui-btn" lay-filter="*" lay-submit>
										立即登录
									</button>
									<span style="padding-left:20px;">
										<router-link :to="{ name: 'forget' }"
											>忘记密码？</router-link
										>
									</span>
								</div>
								<div class="layui-form-item fly-form-app">
									<span>或者使用社交账号登入</span>
									<a
										href
										onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
										class="iconfont icon-qq"
										title="QQ登入"
									></a>
									<a
										href
										onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
										class="iconfont icon-weibo"
										title="微博登入"
									></a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCode } from "../api/login";
import uuid from "uuid/dist/v4";

export default {
	name: "Login",
	data() {
		return {
			userName: "",
			password: "",
			code: "",
			svg: "",
			sid: "",
		};
	},
	mounted() {
		let sid = localStorage.getItem("sid");
		if (!sid) {
			sid = uuid();
			localStorage.setItem("sid", sid);
		}
		this.$store.commit("setSid", sid);
		console.log(sid);

		this.getCaptcha();
	},
	methods: {
		getCaptcha() {
			getCode().then((res) => {
				if (res.code !== 200) return;
				this.svg = res.data;
			});
		},
	},
};
</script>

<style scoped>
.svg {
	position: relative;
	top: -4px;
}
</style>
