'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		user_id,
		article_id,
		comment_id = '',
		reply_id = '',
		is_reply,
		content
		} = event

	let user = await db.collection('user').doc(user_id).get()
	user = user.data[0]
	const article = db.collection('article')
	const articles = await article.doc(article_id).get()
	const comments = articles.data[0].comment
	let {comments_count} = articles.data[0]

	let commentObj = {
		_id: genId(5),
		content,
		time: new Date().getTime(),
		is_reply,
		author:{
			_id: user._id,
			author_name: user.author_name,
			avatar: user.avatar,
		},
		replys: []
	}

	if(comment_id === '') {
		// 评论文章
		commentObj = dbCmd.unshift(commentObj)
		comments_count+=1
	} else {
		// 回复评论
		//获取评论索引
		const commentIndex = comments.findIndex(item => item._id === comment_id)
		let commentAuthor = ''
		//获取评论作者
		if(is_reply){
			//子回复
			commentAuthor = comments[commentIndex].replys.find(item => item._id === reply_id)
		} else {
			// 父回复
			commentAuthor = comments.find(item => item._id === comment_id)
		}
		comments_count+=1
		commentObj.to = commentAuthor.author.author_name
		commentObj = {
			[commentIndex]: {
				replys: dbCmd.unshift(commentObj)
			}
		}
	}

	await article.doc(article_id).update({
		comment: commentObj,
		comments_count
	})
	//返回数据给客户端
	return {
		code: 200
	}
};

function genId(length) {
	return Number(Math.random().toString().substr(3,length) + Date.now()).toString(32)
}