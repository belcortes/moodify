import { combineReducers } from 'redux';

import PlaylistsReducer from './reducer_playlist'

const rootReducer = combineReducers({
  playlists: PlaylistsReducer
});

export default rootReducer;