<template>
	<div class="layui-form layui-form-pane layui-tab-item layui-show">
		<validation-observer ref="observer" v-slot="{ validate }">
			<div class="layui-form-item">
				<validation-provider
					name="email"
					rules="required|email"
					v-slot="{ errors }"
				>
					<label for="L_email" class="layui-form-label">邮箱</label>
					<div class="layui-input-inline">
						<input
							type="text"
							name="username"
							v-model="username"
							class="layui-input"
						/>
					</div>
					<!-- <div class="layui-form-mid layui-word-aux">
						如果您在邮箱已激活的情况下，变更了邮箱，需<a
							href="activate.html"
							style="font-size: 12px; color: #4f99cf;"
							>重新验证邮箱</a
						>。
					</div> -->
					<div class="layui-form-mid">
						<span style="color: #c00;">{{ errors[0] }}</span>
					</div>
				</validation-provider>
			</div>

			<div class="layui-form-item">
				<validation-provider name="name" rules="required" v-slot="{ errors }">
					<label for="L_username" class="layui-form-label">昵称</label>
					<div class="layui-input-inline">
						<input type="text" name="name" v-model="name" class="layui-input" />
					</div>
					<div class="layui-form-mid">
						<span style="color: #c00;">{{ errors[0] }}</span>
					</div>
				</validation-provider>
			</div>
			<div class="layui-form-item">
				<label for="L_city" class="layui-form-label">性别</label>
				<div class="layui-input-inline gray mt1 ml1">
					<label for="gender1" class="mr1" :class="{ sex: gender === '0' }">
						<input
							id="gender1"
							type="radio"
							name="sex"
							value="0"
							title="男"
							v-model="gender"
						/>
						<i
							class="layui-icon layui-icon-circle"
							:class="{ 'layui-icon-radio': gender === '0' }"
						></i>
						男
					</label>
					<label for="gender2" :class="{ sex: gender === '1' }">
						<input
							id="gender2"
							type="radio"
							name="sex"
							value="1"
							title="女"
							v-model="gender"
						/>
						<i
							class="layui-icon layui-icon-circle"
							:class="{ 'layui-icon-radio': gender === '1' }"
						></i>
						女
					</label>
				</div>
			</div>

			<div class="layui-form-item">
				<label for="L_city" class="layui-form-label">城市</label>
				<div class="layui-input-inline">
					<input type="text" v-model="location" class="layui-input" />
				</div>
			</div>

			<div class="layui-form-item layui-form-text">
				<label for="L_sign" class="layui-form-label">签名</label>
				<div class="layui-input-block">
					<textarea
						placeholder="随便写些什么刷下存在感"
						v-model="regmark"
						class="layui-textarea"
						style="height: 80px;"
					></textarea>
				</div>
			</div>
			<div class="layui-form-item">
				<button class="layui-btn" @click="validate().then(submit)" lay-submit>
					确认修改
				</button>
			</div>
		</validation-observer>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { updateUserInfo } from "@/api/user";
export default {
	name: "my-info",
	data() {
		return {
			username: "",
			name: "",
			location: "",
			regmark: "",
			gender: "",
		};
	},
	mounted() {
		let {
			username,
			name,
			gender,
			regmark,
			location,
		} = this.$store.state.userInfo;
		this.username = username || "";
		this.name = name || "";
		this.location = location || "";
		this.gender = gender || "";
		this.regmark = regmark || "";
	},
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	methods: {
		async submit() {
			const isValid = await this.$refs.observer.validate();
			if (!isValid) {
				return;
			}

			updateUserInfo({
				username: this.username,
				name: this.name,
				location: this.location,
				regmark: this.regmark,
				gender: this.gender,
			}).then((res) => {
				if (res.code === 200) {
					this.$alert("更新成功");
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.sex {
	color: #5fb878;
}
</style>
