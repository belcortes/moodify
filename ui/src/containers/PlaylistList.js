import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlaylistList extends Component {
	render() {
		return (
			<div>
				playlist list
				{this.props.playlists.map((playlist) => {
					<p>{playlist.name}</p>
				})}
			</div>
		)
	}
}

function mapStateToProps({playlists}) {
	return {playlists}
}

export default connect(mapStateToProps)(PlaylistList)