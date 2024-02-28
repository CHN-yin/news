'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const { user_id, page, pageSize } = event
	let classify = event.name || {}
	if(classify === '全部') classify = {}
	const userInfo = await db.collection('user').doc(user_id).get()
	const { article_likes_ids } = userInfo.data[0]
	console.log(article_likes_ids,user_id);
	const result = await db.collection('article').aggregate()
	// 追加一个字段
	.addFields({
		is_like: $.in(['$_id',article_likes_ids])
	})
	.match({
		classify,
	})
	.project({
		content: 0
	})
	.skip(pageSize*(page-1))
	.limit(pageSize)
	.end()
	return {
		code: '200',
		data: result.data,
	}
};
