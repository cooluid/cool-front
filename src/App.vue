<template>
	<div id="app">
		<div class="layui-container">
			<form class="layui-form layui-form-pane" action="">
				<div class="layui-form-item">
					<label class="layui-form-label">用户名</label>
					<div class="layui-input-inline">
						<validation-provider name="用户名" rules="required|minmax:6,10" v-slot="{errors}">
							<input type="text" name="title" v-model="name" placeholder="请输入用户名" autocomplete="off" class="layui-input">
							<span class="error">{{errors[0]}}</span>
						</validation-provider>
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">密码</label>
					<div class="layui-input-inline">
						<validation-provider name="密码" rules="required|minmax:6,20" v-slot="{errors}">
							<input type="password" name="title" v-model="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
							<span class="error">{{errors[0]}}</span>
						</validation-provider>
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">验证码</label>
					<div class="layui-input-inline">
						<input autocomplete="off" class="layui-input" v-model="code" lay-verify="required" name="title" placeholder="请输入验证码" required type="text">
					</div>
					<div class="layui-form-mid layui-word-aux svg" @click="getCaptcha" v-html="svg"></div>
				</div>
			</form>
			<button type="button" class="layui-btn" @click="checkForm">点击登陆</button>
			<a class="cool-link" href="http://www.layui.com">忘记密码</a>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import {ValidationProvider, extend} from 'vee-validate'
	import {required} from 'vee-validate/dist/rules'

	extend('required', {
		...required,
		message: '{_field_}不能为空'
	})
	extend('minmax', {
		validate(value, {min, max}) {
			return value.length >= min && value.length <= max
		},
		params: ['min', 'max'],
		message: '{_field_}长度最小为{min}，最大为{max}'
	})

	export default {
		name: 'app',
		data() {
			return {
				svg: '',
				name: '',
				password: '',
				code: '',
				errorMsg: []
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
			},
			checkForm() {
				this.errorMsg = []
				if (!this.name) {
					this.errorMsg.push(`用户名不得为空`)
				}
				if (!this.password) {
					this.errorMsg.push(`密码不得为空`)
				}
				if (!this.code) {
					this.errorMsg.push(`验证码不得为空`)
				}
			}
		},
		components: {
			ValidationProvider
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
	
	.error {
		color: red;
	}
</style>
