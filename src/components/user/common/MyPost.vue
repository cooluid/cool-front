<template>
	<div>
		<div class="layui-table" border="0">
			<thead>
				<tr>
					<th>
						<div class="layui-table-cell pl0"><span>帖子标题</span></div>
					</th>
					<th>
						<div class="layui-table-cell"><span>状态</span></div>
					</th>
					<th>
						<div class="layui-table-cell"><span>结贴</span></div>
					</th>
					<th>
						<div class="layui-table-cell"><span>发表时间</span></div>
					</th>
					<th>
						<div class="layui-table-cell"><span>数据</span></div>
					</th>
					<th>
						<div class="layui-table-cell"><span>操作</span></div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td class="text-left">文章测试标题</td>
					<td>打开</td>
					<td>未结</td>
					<td>2021-1-4 00:00:00</td>
					<td>999阅/200回</td>
					<td>
						<div class="layui-btn layui-btn-xs">编辑</div>
						<div class="layui-btn layui-btn-xs layui-btn-danger">删除</div>
					</td>
				</tr>
			</tbody>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-post",
};
</script>

<style lang="scss" scoped></style>
