import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPlaylist, fetchActivePlaylistTracks, fetchValence } from '../actions/index'

// import Playlist from '../components/Playlist'

const PlaylistList = (props) => {
	if(!props.playlists) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h2>{props.playlists.total} playlists</h2>
			<ul>
				{
					props.playlists.items.map((playlist) => {
						return (
							<li
							key={playlist.name}
							onClick={() => {
								props.selectPlaylist(playlist)
								props.fetchActivePlaylistTracks(playlist)
								// props.fetchValence(playlist)
							}}>{playlist.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		playlists: state.playlists,
		// trackIds: state.activePlaylistTracks
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectPlaylist: selectPlaylist,
		fetchValence: fetchValence,
		fetchActivePlaylistTracks: fetchActivePlaylistTracks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)
