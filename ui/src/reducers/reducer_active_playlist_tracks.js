import { SELECTED_PLAYLIST_TRACKS } from '../actions/index'

export default function(state = null, action) {
	switch(action.type) {
		case SELECTED_PLAYLIST_TRACKS:
			const tracks = []
			action.payload.data.items.forEach((track) => {
				tracks.push(track)
			})
			return tracks;
		default:
			return state;
	}
}
