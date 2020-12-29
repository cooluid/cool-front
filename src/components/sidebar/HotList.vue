<template>
	<div class="fly-panel fly-list-one">
		<dt class="fly-panel-title">本周热议</dt>
		<dd v-for="(item, index) in lists" :key="'week' + index">
			<a href="jie / detail.html">{{ item.title }}</a>
			<span><i class="iconfont icon-pinglun1"></i> {{ item.answer }}</span>
		</dd>

		<!-- 无数据时 -->
		<!--
        <div class="fly-none">没有相关数据</div>
        -->
	</div>
</template>

<script>
import { getTop } from "@/api/content";
export default {
	name: "hotlist",
	data() {
		return { lists: [] };
	},
	mounted() {
		getTop()
			.then((res) => {
				if (res.code === 200) {
					this.lists = res.data;
				}
			})
			.catch((err) => {
				if (err) {
					this.$alert(err.msg);
				}
			});
	},
};
</script>

<style lang="scss" scoped></style>
