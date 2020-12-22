<template>
	<div>
		<panel-vue></panel-vue>
		<router-view></router-view>
	</div>
</template>

<script>
import PanelVue from "@/components/Panel.vue";

export default {
	name: "home",
	components: {
		PanelVue,
	},
};
</script>

<style lang="scss" scoped></style>
