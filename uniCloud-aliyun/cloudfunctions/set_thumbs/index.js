'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const { user_id, article_id } = event
	const userinfo = await db.collection('user').doc(user_id).get()
	const { thumbs_up_article_ids } = userinfo.data[0]
	let count = await db.collection('article').doc(article_id).get()
	count = count.data[0].thumbs_up_count
	let dbCmdFuns = null
	
	if (thumbs_up_article_ids.includes(article_id)) {
		dbCmdFuns = dbCmd.pull(article_id)
		if(count >0 ) count --
	} else {
		dbCmdFuns = dbCmd.addToSet(article_id)
		count ++
	}
	
	await db.collection('user').doc(user_id).update({
		thumbs_up_article_ids: dbCmdFuns
	})
	await db.collection('article').doc(article_id).update({
		thumbs_up_count: count
	})
	//返回数据给客户端
	return {
		code: 200
	}
};
