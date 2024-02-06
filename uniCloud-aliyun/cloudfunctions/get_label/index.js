'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	const { user_id, type } = event
	let matchObj = {}
	if(type !== 'all') {
		matchObj = {
			current: true
		}
	}
	const user = db.collection('user') 
	const label = db.collection('label')
	let userInfo = await user.doc(user_id).get()
	userInfo = userInfo.data[0]
	const result = await label.aggregate()
	.addFields({
		current: $.in(['$_id', $.ifNull([userInfo.label_ids,[]])])
	})
	.match(matchObj)
	.end()
	//返回数据给客户端
	return {
		code: '200',
		data: result.data
	}
};
