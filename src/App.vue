<template>
	<div id="app">
		<div class="layui-container">
			<form class="layui-form layui-form-pane" action="">
				<div class="layui-form-item">
					<label class="layui-form-label">用户名</label>
					<div class="layui-input-block">
						<input type="text" name="title" required lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">密码</label>
					<div class="layui-input-block">
						<input type="password" name="title" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">验证码</label>
					<div class="layui-input-inline">
						<input autocomplete="off" class="layui-input" lay-verify="required" name="title" placeholder="请输入验证码" required type="text">
					</div>
					<div class="layui-form-mid layui-word-aux svg" @click="getCaptcha" v-html="svg"></div>
				</div>
			</form>
			<button type="button" class="layui-btn">点击登陆</button>
			<a class="cool-link" href="http://www.layui.com">忘记密码</a>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		name: 'app',
		data() {
			return {
				svg: ''
			}
		},
		mounted() {
			this.getCaptcha()
		},
		methods: {
			async getCaptcha() {
				let captcha = await axios.get('http://localhost:3000/getCaptcha')
				if (captcha.status != 200) return;
				if (!captcha.data || captcha.data.code != 200) return;

				this.svg = captcha.data.data
			}
		}
	}
</script>
<style lang="scss" scoped>
	#app {
		background: #f2f2f2;
	}
	
	.layui-container {
		background: #fff;
	}
	
	.cool-link {
		margin-left: 10px;
		
		&:hover {
			color: #009688;
		}
	}
	
	.svg {
		position: relative;
		top: -15px;
	}
	
	input {
		width: 190px;
	}
</style>
