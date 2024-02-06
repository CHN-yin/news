'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const { user_id, article_id } = event
	
	const user = await db.collection('user').doc(user_id).get()
	let {author_likes_ids, fans_count} = user.data[0]
	
	const article = await db.collection('article').doc(article_id).get()
	const article_author_id = article.data[0].author.id
	
	let dbCmdAuthor = null
	if (author_likes_ids.includes(article_author_id)) {
		dbCmdAuthor = dbCmd.pull(article_author_id)
		fans_count -= 1
	} else {
		dbCmdAuthor = dbCmd.addToSet(article_author_id)
		fans_count += 1
	}
	await db.collection('user').doc(user_id).update({
		author_likes_ids: dbCmdAuthor
	})
	
	await db.collection('user').doc(article_author_id).update({
		fans_count
	})
	
	//返回数据给客户端
	return {
		code: 200
	}
};
