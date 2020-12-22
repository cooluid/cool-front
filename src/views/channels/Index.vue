<template>
	<div class="layui-container">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md8">
				<top></top>
				<list></list>
			</div>
			<div class="layui-col-md4">
				<tips></tips>
				<sign></sign>
				<hot-list></hot-list>
				<ads></ads>
				<links></links>
			</div>
		</div>
	</div>
</template>

<script>
import Ads from "@/components/sidebar/Ads.vue";
import HotList from "@/components/sidebar/HotList.vue";
import Links from "@/components/sidebar/Links.vue";
import Sign from "@/components/sidebar/Sign.vue";
import Tips from "@/components/sidebar/Tips.vue";
import List from "@/components/contents/List.vue";
import Top from "@/components/contents/Top.vue";
export default {
	name: "index",
	components: {
		Ads,
		HotList,
		Links,
		Sign,
		Tips,
		List,
		Top,
	},
};
</script>

<style lang="scss" scoped></style>
