export default function pm(options){
	const { url, data } = options
	const dataObj = {
		user_id: '658009a7bd02205a533b24ec',
		...data
	}
	return new Promise((resolve,reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then((res) => {
			if(res.result.code != 200) return reject(res.result)
			resolve(res.result)
		}).catch((err) => {
			console.log(err);
		})
	})
}