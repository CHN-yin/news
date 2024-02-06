'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const { user_id } = event
	
	const result = await db.collection('user').doc(user_id).get()
	
	//返回数据给客户端
	return {
		code: 200,
		data: result.data[0]
	}
};
