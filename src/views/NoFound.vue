<template>
	<div class="layui-container bg">
		<div class="head404"></div>
		<div class="txtbg404 txtbox">
			<p class="ptitle">对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
			<p>请点击以下链接继续浏览网页</p>
			<p>》<router-link to="/">返回网站首页</router-link></p>
		</div>
	</div>
</template>

<script>
export default {
	name: "no-found",
};
</script>

<style lang="scss" scoped>
.bg {
	background: #494949;
}
.head404 {
	width: 580px;
	height: 234px;
	margin: 50px auto 0 auto;
	background: url(../assets/head404.png) no-repeat;
}
.txtbg404 {
	width: 499px;
	height: 169px;
	margin: 10px auto 0 auto;
	background: url(../assets/txtbg404.png) no-repeat;

	.txtbox {
		width: 390px;
		position: relative;
		top: 30px;
		left: 60px;
		color: #eee;
		font-size: 13px;

		.paddingbox {
			padding-top: 15px;
		}
	}
}
.ptitle {
	font-size: 16px;
	color: #ccc;
	padding-bottom: 20px;
}
p {
	margin: 15px 0;
	line-height: 18px;
	color: #eee;
}
.flex {
	width: 100%;
	min-height: 400px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}
</style>
