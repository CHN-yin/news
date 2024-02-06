'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const { user_id ,label_ids=[] } = event
	const label = db.collection('user')
	const result = await label.doc(user_id).update({ label_ids })
	//返回数据给客户端
	return {
		code: 200,
		data: result
	}
};
