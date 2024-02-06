import pm from "./http"

export const get_label = data => {
	return pm({
		url: 'get_label',
		data
	})
}

export const set_label = data => {
	return pm({
		url: 'set_label',
		data
	})
}
	
export const get_list = data => {
	return pm({
		url: 'get_list',
		data
	})
}

export const list_like = data => {
	return pm({
		url: 'list_like',
		data
	})
}

export const get_search = data => {
	return pm({
		url: 'get_search',
		data
	})
}

export const get_detail = data => {
	return pm({
		url: 'get_detail',
		data
	})
}

export const set_comment = data => {
	return pm({
		url: 'set_comment',
		data
	})
}

export const get_comment = data => {
	return pm({
		url: 'get_comment',
		data
	})
}

export const set_author = data => {
	return pm({
		url: 'set_author',
		data
	})
}

export const set_thumbs = data => {
	return pm({
		url: 'set_thumbs',
		data
	})
}

export const get_follow = data => {
	return pm({
		url: 'get_follow',
		data
	})
}

export const get_likeAuthor = data => {
	return pm({
		url: 'get_likeAuthor',
		data
	})
}
export const get_userInfo = data => {
	return pm({
		url: 'get_userInfo',
		data
	})
}