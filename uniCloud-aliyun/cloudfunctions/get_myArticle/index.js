'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const { user_id } = event
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]
	
	const result = await db.collection('article').aggregate()
	.match({
		_id: dbCmd.in(userInfo.article_ids)
	})
	.end()
	
	
	//返回数据给客户端
	return {
		code: 200,
		data: result.data
	}
};
