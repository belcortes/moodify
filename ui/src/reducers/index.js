import { combineReducers } from 'redux';

import PlaylistsReducer from './reducer_playlist'
import ActivePlaylistReducer from './reducer_active_playlist'
import ActivePlaylistValenceReducer from './reducer_active_playlist_valence'

const rootReducer = combineReducers({
  playlists: PlaylistsReducer,
  activePlaylist: ActivePlaylistReducer,
  activePlaylistValence: ActivePlaylistValenceReducer
});

export default rootReducer;