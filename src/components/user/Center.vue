<template>
	<div class="panel main pd20">
		<div class="msg">Hi,Admin,Welcome!</div>
		<div class="layui-row layui-col-space20">
			<div class="layui-col-md6 border">
				<div class="panel">
					<div class="title">我的会员信息</div>
					<div class="content">
						<p>积分经验值：90</p>
						<p>你当前为：非VIP</p>
					</div>
				</div>
			</div>
			<div class="layui-col-md6 border">
				<sign></sign>
			</div>
			<div class="layui-col-md12 mt20">
				<div class="panel">
					<div class="title">快捷方式</div>
					<div class="content" style="height:auto">
						<ul class="layui-row layui-col-space10">
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
							<li class="layui-col-sm3 layui-col-xs4">
								<a href="">
									<div class="layui-icon layui-icon-set shortcut"></div>
									<span>修改密码</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sign from "../sidebar/Sign.vue";
export default {
	components: { Sign },
	name: "user-center",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
	.panel {
		margin: 0 !important;
	}
}
.panel {
	color: #333;
	border-radius: 5px;
	background-color: #fff;
	transform: all 0.5s;
	&.main {
		margin: 0 0 10px 225px;
		box-shadow: 10px 8px 5px 0 rgba(0, 0, 0, 0.05);
	}
}
.msg {
	background-color: #f8f8f8;
	color: #666;
	padding: 10px 10px;
	margin-bottom: 20px;
}
.border {
	border: 1px solid #e6e6e6;
}
.pd20 {
	padding: 20px;
}

.mt20 {
	margin-top: -20px;
}

.shortcut {
	background-color: #2f9688;
	width: 100%;
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #fff;
	border-radius: 2px;
	font-size: 30px;
}

li {
	text-align: center;
	padding: 5px;
}

.title {
	height: 50px;
	padding: 0 15px;
	color: #333;
	line-height: 50px;
	border-bottom: 1px dotted #e9e9e9;
	font-size: 14px;
}

.content {
	padding: 18px 15px;
	height: 65px;
	line-height: 26px;
	font-size: 14px;
	color: #666;
}
</style>
