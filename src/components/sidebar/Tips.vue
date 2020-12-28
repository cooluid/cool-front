<template>
	<div class="fly-panel">
		<h3 class="fly-panel-title">温馨通道</h3>
		<div class="fly-panel-main layui-row">
			<ul class="layui-clear cool-quick">
				<li
					class="layui-col-xs6"
					v-for="(item, index) in lists"
					:key="'tips' + index"
				>
					<a :href="item.link" target="_blank">{{ item.title }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { getTips } from "@/api/content";
export default {
	name: "tips",
	data() {
		return {
			lists: [],
		};
	},
	mounted() {
		getTips()
			.then((res) => {
				console.log("🚀 ~ file: Tips.vue ~ line 29 ~ getTips ~ res", res);
				if (res.code === 200) {
					this.lists = res.data;
				}
			})
			.catch((err) => {
				this.$alert(err.message);
			});
	},
};
</script>
<style lang="scss" scoped>
$border-color: #f2f2f2;
.fly-panel-main {
	padding: 15px;
}
.cool-quick {
	border: 1px solid $border-color;
	border-bottom: none;
	border-right: none;
	.layui-col-xs6 {
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		border: 1px solid $border-color;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		border-left: none;
		border-top: none;
		a {
			display: block;
		}
	}
}
</style>
