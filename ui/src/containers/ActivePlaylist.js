import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchValence } from '../actions/index'

class ActivePlaylist extends Component {
	// state = {
	// 	valence: 0
	// }

	render() {
		if(!this.props.playlist || !this.props.tracks){
			return <div>Select a playlist to get started</div>
		}

		return (
			<div>
				<h2>Total tracks: {this.props.playlist.total}</h2>
				{
					this.props.tracks.map((track) => {
						return (
							<p key={track.track.id}>{track.track.name}</p>
						)
					})
				}
				// { this.props.fetchValence(this.props.tracks)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		playlist: state.activePlaylist,
		tracks: state.activePlaylistTracks
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchValence: () => { dispatch(fetchValence()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlaylist)
