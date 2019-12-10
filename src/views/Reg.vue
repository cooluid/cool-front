<template>
	<div class="layui-container fly-marginTop">
		<div class="fly-panel fly-panel-user" pad20>
			<div class="layui-tab layui-tab-brief" lay-filter="user">
				<ul class="layui-tab-title">
					<li>
						<router-link :to="{name:'login'}">登入</router-link>
					</li>
					<li class="layui-this">
						<router-link :to="{name:'reg'}">注册</router-link>
					</li>
				</ul>
				<div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
					<div class="layui-tab-item layui-show">
						<div class="layui-form layui-form-pane">
							<form method="post">
								<div class="layui-form-item">
									<div class="layui-row">
										<label class="layui-form-label">邮箱</label>
										<div class="layui-input-inline">
											<input type="text" v-validate="'required|email'" name="email" lay-verify="email" autocomplete="off" class="layui-input">
										</div>
										<div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
										<div class="layui-form-mid" style="color: red">{{errors.first('email')}}</div>
									</div>
								</div>
								<div class="layui-form-item">
									<label class="layui-form-label">昵称</label>
									<div class="layui-input-inline">
										<input type="text" v-validate="'required'" name="username" lay-verify="required" autocomplete="off" class="layui-input">
									</div>
									<div class="layui-form-mid" style="color: red">{{errors.first('username')}}</div>
								</div>
								<div class="layui-form-item">
									<label class="layui-form-label">密码</label>
									<div class="layui-input-inline">
										<input type="password" v-validate="'required|min:6'" ref="password" name="pass" lay-verify="required" autocomplete="off" class="layui-input">
									</div>
									<div class="layui-form-mid" style="color: red">{{errors.first('pass')}}</div>
									<div class="layui-form-mid layui-word-aux">6到16个字符</div>
								</div>
								<div class="layui-form-item">
									<label class="layui-form-label">确认密码</label>
									<div class="layui-input-inline">
										<input type="password" name="repass" v-validate="'required|confirmed:password'" lay-verify="required" autocomplete="off" class="layui-input">
									</div>
									<div class="layui-form-mid" style="color: red">{{errors.first('repass')}}</div>
								</div>
								<div class="layui-form-item">
									<div class="layui-row">
										<label class="layui-form-label">验证码</label>
										<div class="layui-input-inline">
											<input type="text" name="code" v-validate="'required|min:4'" lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
										</div>
										<div class="svg" v-html="svg" @click="_getCode"></div>
										<div class="layui-form-mid" style="color: red">{{errors.first('code')}}</div>
									</div>
								</div>
								<div class="layui-form-item">
									<button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
								</div>
								<div class="layui-form-item fly-form-app">
									<span>或者直接使用社交账号快捷注册</span>
									<a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
									<a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
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
	import {getCode} from "../api/login";

	export default {
		name: "Reg",
		data() {
			return {
				svg: '',
				code: ''
			}
		},
		mounted() {
			this._getCode()
		},
		methods: {
			_getCode() {
				getCode().then((res)=>{
					if (res.code !== 200) return;
					this.svg = res.data;
				})
			}
		}
	}
</script>

<style scoped>

</style>