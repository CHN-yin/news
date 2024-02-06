'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const { user_id, search_value } = event
	const userInfo = await db.collection('user').get()
	const { article_likes_ids } = userInfo.data[0]
	const result = await db.collection('article').aggregate()
	// 追加一个字段
	.addFields({
		is_like: $.in(['$_id',article_likes_ids])
	})
	.match({
		title: new RegExp(search_value)
	})
	.project({
		content: 0
	})
	.end()
	return {
		code: '200',
		data: result.data,
	}
};
