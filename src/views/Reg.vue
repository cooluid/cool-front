<template>
	<div class="layui-container fly-marginTop">
		<div class="fly-panel fly-panel-user" pad20>
			<div class="layui-tab layui-tab-brief" lay-filter="user">
				<ul class="layui-tab-title">
					<li>
						<router-link :to="{ name: 'login' }">登入</router-link>
					</li>
					<li class="layui-this">
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
								<validation-provider
									rules="required|email"
									name="email"
									v-slot="{ errors }"
								>
									<div class="layui-form-item">
										<div class="layui-row">
											<label class="layui-form-label">邮箱</label>
											<div class="layui-input-inline">
												<input
													type="text"
													name="email"
													lay-verify="email"
													autocomplete="off"
													class="layui-input"
												/>
											</div>
											<div class="layui-form-mid layui-word-aux">
												将会成为您唯一的登入名
											</div>
											<div class="layui-form-mid" style="color: red">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</validation-provider>
								<validation-provider
									name="nick"
									rules="required"
									v-slot="{ errors }"
								>
									<div class="layui-form-item">
										<label class="layui-form-label">昵称</label>
										<div class="layui-input-inline">
											<input
												type="text"
												name="username"
												lay-verify="required"
												autocomplete="off"
												class="layui-input"
											/>
										</div>
										<div class="layui-form-mid" style="color: red">
											{{ errors[0] }}
										</div>
									</div>
								</validation-provider>
								<validation-provider
									name="password"
									rules="required|min:6"
									v-slot="{ errors }"
								>
									<div class="layui-form-item">
										<label class="layui-form-label">密码</label>
										<div class="layui-input-inline">
											<input
												type="password"
												ref="password"
												name="pass"
												lay-verify="required"
												autocomplete="off"
												class="layui-input"
											/>
										</div>
										<div class="layui-form-mid" style="color: red">
											{{ errors[0] }}
										</div>
										<div class="layui-form-mid layui-word-aux">6到16个字符</div>
									</div>
								</validation-provider>
								<validation-provider
									name="repass"
									rules="required|confirmed:password"
									v-slot="{ errors }"
								>
									<div class="layui-form-item">
										<label class="layui-form-label">确认密码</label>
										<div class="layui-input-inline">
											<input
												type="password"
												name="repass"
												lay-verify="required"
												autocomplete="off"
												class="layui-input"
											/>
										</div>
										<div class="layui-form-mid" style="color: red">
											{{ errors[0] }}
										</div>
									</div>
								</validation-provider>
								<validation-provider
									name="code"
									rules="required|min:4"
									v-slot="{ errors }"
								>
									<div class="layui-form-item">
										<div class="layui-row">
											<label class="layui-form-label">验证码</label>
											<div class="layui-input-inline">
												<input
													type="text"
													name="code"
													lay-verify="required"
													placeholder="请输入验证码"
													autocomplete="off"
													class="layui-input"
												/>
											</div>
											<div class="svg" v-html="svg" @click="_getCode"></div>
											<div class="layui-form-mid" style="color: red">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</validation-provider>
								<div class="layui-form-item">
									<button class="layui-btn" lay-filter="*" lay-submit>
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCode } from "../api/login";
import { ValidationProvider } from "vee-validate";

export default {
	name: "Reg",
	components: {
		ValidationProvider,
	},
	data() {
		return {
			svg: "",
			code: "",
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
	},
};
</script>

<style scoped></style>
