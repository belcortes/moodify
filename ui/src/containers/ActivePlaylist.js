import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { selectedPlaylistValence } from '../actions/index'

const ActivePlaylist = (props) => {
	if(!props.playlist){
		return <div>Select a playlist to get started</div>
	}
	return (
		<div>
			{
				props.playlist.items.map((track) => {
					// props.selectedPlaylistValence(track.track.id)
					return <p key={track.track.id}>{track.track.name}</p>
				})
			}
		</div>
	)
}

function mapStateToProps(state){
	return {
		playlist: state.activePlaylist,
		activePlaylistValence: state.activePlaylistValence
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		selectedPlaylistValence: selectedPlaylistValence
// 	}, dispatch)
// }

export default connect(mapStateToProps)(ActivePlaylist)