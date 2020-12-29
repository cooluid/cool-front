<template>
	<div class="fly-panel">
		<div class="fly-panel-title fly-filter">
			<a>置顶</a>
			<a
				href="#signin"
				class="layui-hide-sm layui-show-xs-block fly-right"
				id="LAY_goSignin"
				style="color: #FF5722;"
				>去签到</a
			>
		</div>
		<div>
			<list-item></list-item>
		</div>
	</div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
	name: "top",

	components: {
		ListItem,
	},
};
</script>

<style lang="scss" scoped></style>
