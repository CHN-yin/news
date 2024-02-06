'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const { detail_id, user_id } = event
	const article = db.collection('article')
	const user = db.collection('user')
	let userInfo = await user.doc(user_id).get()
	userInfo = userInfo.data[0]
	const result = await article.aggregate()
	.addFields({
		is_author_like: $.in(['$author.id', userInfo.author_likes_ids]),
		is_article_like: $.in(['$_id', userInfo.article_likes_ids]),
		is_thumbs_up_article: $.in(['$_id', userInfo.thumbs_up_article_ids])
	})
	.match({
		_id: detail_id
	})
	.project({
		coments: false
	})
	.end()
	
	//返回数据给客户端
	return {
		code: 200,
		data: result.data[0]
	}
};
