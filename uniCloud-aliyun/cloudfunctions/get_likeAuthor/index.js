'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	const { user_id } = event
	
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]
	
	const result = await db.collection('user').aggregate()
	.addFields({
		is_like: $.in(['$_id', userInfo.author_likes_ids])
	})
	.match({
		is_like:true
	})
	.end()
	
	//返回数据给客户端
	return {
		code: 200,
		data: result.data
	}
};
