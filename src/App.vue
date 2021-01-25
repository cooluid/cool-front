<template>
	<div id="app">
		<im-header></im-header>
		<router-view></router-view>
		<im-footer></im-footer>
	</div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
	name: "app",
	components: {
		"im-header": Header,
		"im-footer": Footer,
	},
};
</script>
<style lang="scss">
@import "assets/css/global.css";
@for $i from 0 to 5 {
	.pd#{$i} {
		padding: $i * 10 + px !important;
	}
	.pl#{$i} {
		padding-left: $i * 10 + px !important;
	}
	.pr#{$i} {
		padding-right: $i * 10 + px !important;
	}
	.mr#{$i} {
		margin-right: $i * 10 + px !important;
	}
	.ml#{$i} {
		margin-left: $i * 10 + px !important;
	}
	.mt#{$i} {
		margin-top: $i * 10 + px !important;
	}
}
//公用样式
.svg {
	// position: relative;
	top: -4px;
}
.gray {
	color: #999;
}
.orange {
	color: #ff5722;
}
.pull-right {
	float: right !important;
}
.pl0 {
	padding-left: 0;
}
.pr0 {
	padding-right: 0;
}
.text-left {
	text-align: left;
}
.text-right {
	text-align: right;
}
.text-center {
	text-align: center;
}
</style>
