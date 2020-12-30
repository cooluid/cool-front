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
//公用样式
.svg {
	// position: relative;
	top: -4px;
}
.gray {
	color: #999;
}
</style>
