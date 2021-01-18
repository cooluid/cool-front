<template>
	<div class="fly-panel" style="margin-bottom: 0;">
		<div class="fly-panel-title fly-filter">
			<a
				:class="{ 'layui-this': status === '' && tag === '' }"
				@click.prevent="search()"
				>综合</a
			>
			<span class="fly-mid"></span>
			<a :class="{ 'layui-this': status === '0' }" @click.prevent="search(0)"
				>未结</a
			>
			<span class="fly-mid"></span>
			<a :class="{ 'layui-this': status === '1' }" @click.prevent="search(1)"
				>已结</a
			>
			<span class="fly-mid"></span>
			<a
				:class="{ 'layui-this': status === '' && tag === '精华' }"
				@click.prevent="search(2)"
				>精华</a
			>
			<span class="fly-filter-right layui-hide-xs">
				<a
					:class="{ 'layui-this': sort === 'created' }"
					@click.prevent="search(3)"
					>按最新</a
				>
				<span class="fly-mid"></span>
				<a
					:class="{ 'layui-this': sort === 'answer' }"
					@click.prevent="search(4)"
					>按热议</a
				>
			</span>
		</div>
		<div>
			<list-item
				:isEnd="isEnd"
				:lists="lists"
				@nextpage="nextPage()"
			></list-item>
		</div>
	</div>
</template>

<script>
import ListItem from "./ListItem.vue";
import { getList } from "@/api/content";
export default {
	name: "list",
	data() {
		return {
			isEnd: false,
			isRepeat: false,
			status: "",
			tag: "",
			sort: "created",
			page: 0,
			limit: 20,
			catalog: "",
			lists: [],
			current: "",
		};
	},
	components: {
		ListItem,
	},
	mounted() {
		this._getLists();
	},
	watch: {
		current() {
			this.init();
		},
		$route() {
			this.init(true);
		},
	},
	methods: {
		init(catalog = false) {
			if (catalog) {
				let d = this.$route.params["catalog"];
				if (typeof d !== "undefined" && d !== "") {
					this.catalog = d;
				}
			}
			this.page = 0;
			this.lists = [];
			this.isEnd = false;
			this._getLists();
		},
		_getLists() {
			if (this.isRepeat) return;
			if (this.isEnd) return;

			this.isRepeat = true;
			let options = {
				catalog: this.catalog,
				isTop: 0,
				page: this.page,
				limit: this.limit,
				sort: this.sort,
				tag: this.tag,
				status: this.status,
			};
			getList(options)
				.then((res) => {
					this.isRepeat = false;
					if (res.code === 200) {
						if (res.data.length < this.limit) {
							this.isEnd = true;
						}
						if (this.lists.length === 0) {
							this.lists = res.data;
						} else {
							this.lists = this.lists.concat(res.data);
						}
					}
				})
				.catch((err) => {
					this.isRepeat = false;
					if (err) {
						this.$alert(err.message);
					}
				});
		},
		nextPage() {
			this.page++;
			this._getLists();
		},
		search(val) {
			if (typeof val === "undefined" && this.current === "") {
				return;
			}
			this.current = val;
			switch (val) {
				case 0:
					(this.status = "0"), (this.tag = "");
					break;
				case 1:
					this.status = "1";
					this.tag = "";
					break;
				case 2:
					(this.status = ""), (this.tag = "精华");
					break;
				case 3:
					this.sort = "created";
					break;
				case 4:
					this.sort = "answer";
					break;
				default:
					(this.status = ""), (this.tag = "");
					this.current = "";
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
