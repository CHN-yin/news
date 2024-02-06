'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	const { detail_id, page, pageSize } = event
	
	const result = await db.collection('article').aggregate()
	.match({
		_id: detail_id
	})
	.unwind('$comment')
	.project({
		_id: 0,
		comment: 1
	})
	.replaceRoot({
		newRoot: '$comment'
	})
	// 需要跳过多少条数据
	.skip(pageSize * (page - 1))
	// 获取多少条数据
	.limit(pageSize)
	.end()
	//返回数据给客户端
	return {
		code: 200,
		data: result.data
	}
};
