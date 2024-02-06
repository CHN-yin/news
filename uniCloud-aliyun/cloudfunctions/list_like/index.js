'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const { user_id, article_id } = event
	const collect = db.collection('user')
	const userinfo = await collect.doc(user_id).get()
	const { article_likes_ids } = userinfo.data[0]
	let dbCmdFuns = null
	
	if (article_likes_ids.includes(article_id)) {
		dbCmdFuns = dbCmd.pull(article_id)
	} else {
		dbCmdFuns = dbCmd.addToSet(article_id)
	}
	
	await collect.doc(user_id).update({
		article_likes_ids: dbCmdFuns
	})
	//返回数据给客户端
	return {
		code: 200,
		data: userinfo
	}
};
