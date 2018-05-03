import { FETCH_PLAYLISTS }from '../actions/index'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_PLAYLISTS:
			return [action.payload.data, ...state]
	}

	return state
}