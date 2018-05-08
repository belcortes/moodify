import { FETCH_PLAYLISTS }from '../actions/index'

export default function(state = {}, action) {
	
	if(action.payload){
		console.log(action.payload.data)
		switch(action.type) {
			case FETCH_PLAYLISTS:
				return action.payload.data
		}
	}
	

	return state
}