import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPlaylist } from '../actions/index'

// import Playlist from '../components/Playlist'

const PlaylistList = (props) => {
	if(!props.playlists) {
		return <div>Loading...</div>
	} 

	return (
		<div>
			<h2>{props.playlists.total} playlists</h2>
			<ul>
				{console.log(props.playlists)}
				{
					props.playlists.items.map((playlist) => {
						return (
							<li 
							key={playlist.name}
							onClick={() => props.selectPlaylist(playlist)}>{playlist.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

function mapStateToProps({playlists}) {
	return {playlists}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectPlaylist: selectPlaylist}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)




