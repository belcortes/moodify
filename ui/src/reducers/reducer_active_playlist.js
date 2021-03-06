import { PLAYLIST_SELECTED }from '../actions/index'

export default function(state = null, action) {
	switch(action.type) {
		case PLAYLIST_SELECTED:
			return action.payload.data;
		default: 
			return state;
	}
}