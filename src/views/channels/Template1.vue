<template>
	<div class="layui-container">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md8">
				<list></list>
			</div>
			<div class="layui-col-md4">
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
import List from "@/components/contents/List.vue";
export default {
	name: "Template1",
	components: {
		Ads,
		HotList,
		Links,
		List,
	},
};
</script>

<style lang="scss" scoped></style>
