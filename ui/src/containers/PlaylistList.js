import React, { Component } from 'react'
import { connect } from 'react-redux'

import Playlist from '../components/Playlist'

class PlaylistList extends Component {
	render() {
		{console.log(this.props.playlists)}
		if(this.props.playlists != {}){
			console.log('yoo')
			return (
				<div>
					playlist list
					<h2>{this.props.playlists.total}</h2>
					{console.log(this.props.playlists.items)}
			
					
				</div>
			)
		}
		
	}
}

function mapStateToProps({playlists}) {
	return {playlists}
}

export default connect(mapStateToProps)(PlaylistList)

// /  {this.props.playlists.items.map((playlist) => {
// 					// 	return <Playlist playlist={playlist}/>
// 					// })}



