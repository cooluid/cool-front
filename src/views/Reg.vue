<template>
	<div class="layui-container fly-marginTop">
		<div class="fly-panel fly-panel-user" pad20>
			<div class="layui-tab layui-tab-brief" lay-filter="user">
				<ul class="layui-tab-title">
					<li>
						<router-link :to="{ name: 'login' }">登入</router-link>
					</li>
					<li class="layui-this">注册</li>
				</ul>
				<div
					class="layui-form layui-tab-content"
					id="LAY_ucm"
					style="padding: 20px 0;"
				>
					<validation-observer ref="observer" v-slot="{ validate }">
						<div class="layui-tab-item layui-show">
							<div class="layui-form layui-form-pane">
								<form method="post">
									<div class="layui-form-item">
										<validation-provider
											rules="required|email"
											name="username"
											v-slot="{ errors }"
										>
											<div class="layui-row">
												<label for="L_email" class="layui-form-label"
													>用户名</label
												>
												<div class="layui-input-inline">
													<input
														type="text"
														name="username"
														v-model="username"
														autocomplete="off"
														class="layui-input"
														placeholder="请输入用户名"
													/>
												</div>
												<div class="layui-form-mid layui-word-aux">
													将会成为您唯一的登入名
												</div>
											</div>
											<div class="layui-form-mid">
												<span style="color: #c00;">{{ errors[0] }}</span>
											</div>
										</validation-provider>
									</div>
									<div class="layui-form-item">
										<label class="layui-form-label">昵称</label>
										<validation-provider
											name="name"
											rules="required|min:4"
											v-slot="{ errors }"
										>
											<div class="layui-input-inline">
												<input
													type="text"
													name="name"
													v-model="name"
													autocomplete="off"
													class="layui-input"
													placeholder="请输入昵称"
												/>
											</div>
											<div class="layui-form-mid">
												<span style="color:#c00;">{{ errors[0] }}</span>
											</div>
										</validation-provider>
									</div>

									<div class="layui-form-item">
										<validation-provider
											name="password"
											rules="required|min:6|confirmed:confirmation"
											v-slot="{ errors }"
										>
											<div class="layui-row">
												<label for="L_pass" class="layui-form-label"
													>密码</label
												>
												<div class="layui-input-inline">
													<input
														type="password"
														name="password"
														v-model="password"
														autocomplete="off"
														class="layui-input"
														placeholder="请输入密码"
													/>
												</div>
												<div class="layui-form-mid layui-word-aux">
													6到16个字符
												</div>
											</div>
											<div class="layui-row">
												<span style="color:#c00;">{{ errors[0] }}</span>
											</div>
										</validation-provider>
									</div>

									<div class="layui-form-item">
										<validation-provider v-slot="{ errors }" vid="confirmation">
											<div class="layui-row">
												<label for="L_repass" class="layui-form-label"
													>确认密码</label
												>
												<div class="layui-input-inline">
													<input
														type="password"
														name="repassword"
														v-model="repassword"
														placeholder="请输入密码"
														autocomplete="off"
														class="layui-input"
													/>
												</div>
											</div>
											<div class="layui-row">
												<span style="color: #c00;">{{ errors[0] }}</span>
											</div>
										</validation-provider>
									</div>
									<div class="layui-form-item">
										<validation-provider
											name="code"
											rules="required|min:4"
											v-slot="{ errors }"
											ref="codefield"
										>
											<div class="layui-row">
												<label class="layui-form-label">验证码</label>
												<div class="layui-input-inline">
													<input
														type="text"
														name="code"
														v-model="code"
														placeholder="请输入验证码"
														autocomplete="off"
														class="layui-input"
													/>
												</div>
												<div class="svg" v-html="svg" @click="_getCode"></div>
											</div>
											<div class="layui-row">
												<span style="color: #c00;">{{ errors[0] }}</span>
											</div>
										</validation-provider>
									</div>
									<div class="layui-form-item">
										<button
											class="layui-btn"
											lay-filter="*"
											lay-submit
											type="button"
											@click="validate().then(submit)"
										>
											立即注册
										</button>
									</div>
									<div class="layui-form-item fly-form-app">
										<span>或者直接使用社交账号快捷注册</span>
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
					</validation-observer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCode, reg } from "../api/login";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
	name: "Reg",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			username: "",
			name: "",
			password: "",
			repassword: "",
			svg: "",
			code: "",
			sid: "",
		};
	},
	mounted() {
		this._getCode();
	},
	methods: {
		_getCode() {
			let sid = this.$store.state.sid;
			getCode(sid).then((res) => {
				if (res.code !== 200) return;
				this.svg = res.data;
			});
		},

		async submit() {
			const isValid = await this.$refs.observer.validate();
			if (!isValid) {
				return;
			}

			reg({
				username: this.username,
				password: this.password,
				name: this.name,
				code: this.code,
				sid: this.$store.state.sid,
			})
				.then((res) => {
					if (res.code === 200) {
						this.userName = "";
						this.password = "";
						this.code = "";
						this.name = "";
						requestAnimationFrame(() => {
							this.$refs.observer.reset();
						});
						this.$alert("注册成功");
						setTimeout(() => {
							this.$router.push("/login");
						}, 1000);
					} else {
						this.$refs.observer.setErrors(res.msg);
					}
				})
				.catch(() => {
					this.$alert("服务器错误");
				});
		},
	},
};
</script>

<style scoped></style>
