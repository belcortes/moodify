import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlaylistList extends Component {
	render() {
		if(this.props.playlists === undefined){
			return <p>no playlists yet</p>
		} else {
			return (
				<div>
					playlist list
					{console.log(this.props.playlists[0])}
					{this.props.playlists.map((playlist) => {
						return <div>
							hello
							<p key={playlist.name}>{playlist.name}</p>
							</div>
					})}
				</div>
			)
		}
		
	}
}

function mapStateToProps({playlists}) {
	return {playlists}
}

export default connect(mapStateToProps)(PlaylistList)