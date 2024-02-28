'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		user_id,
		feedbackVal = '',
		imgPath = []
	} = event
	
	const time = new Date().getTime()
	
	await db.collection('feedback').add({
		user_id,
		feedbackVal,
		imgPath,
		time
	})

	//返回数据给客户端
	return {
		code: 200
	}
};