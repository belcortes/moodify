import React from 'react'
import { connect } from 'react-redux'

const ActivePlaylist = (props) => {
	if(!props.playlist){
		return <div>Select a playlist to get started</div>
	}
	{console.log(props.playlist)}
	return (
		<div>
			<p>{props.activePlaylistValence}</p>
			{
				props.playlist.items.map((track) => {
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

export default connect(mapStateToProps)(ActivePlaylist)