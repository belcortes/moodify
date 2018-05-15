import React from 'react'
import { connect } from 'react-redux'

const ActivePlaylist = (props) => {
	if(!props.playlist || !props.tracks){
		return <div>Select a playlist to get started</div>
	}
	{console.log('hello', props.playlist)}
	return (

		<div>
			<h2>Total tracks: {props.playlist.total}</h2>
			{
				props.tracks.map((track) => {
					return <p key={track.track.id}>{track.track.name}</p>
				})
			}
		</div>
	)
}

function mapStateToProps(state){
	return {
		playlist: state.activePlaylist,
		tracks: state.activePlaylistTracks
	}
}

export default connect(mapStateToProps)(ActivePlaylist)
