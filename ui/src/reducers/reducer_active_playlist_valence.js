import { SELECTED_PLAYLIST_VALENCE } from '../actions/index'

export default function(state = null, action) {
	switch(action.type) {
		case SELECTED_PLAYLIST_VALENCE:
			return action.payload.data;
		default: 
			return state;
	}
}