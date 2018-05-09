import { SELECTED_PLAYLIST_TRACKS } from '../actions/index'

export default function(state = null, action) {
	switch(action.type) {
		case SELECTED_PLAYLIST_TRACKS:
			const trackIds = []
			action.payload.data.items.forEach((track) => {
				trackIds.push(track.track.id)
			})
			console.log(trackIds)
			return trackIds;
		default: 
			return state;
	}
}