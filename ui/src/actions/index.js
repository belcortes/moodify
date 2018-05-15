import axios from 'axios'
import queryString from 'query-string';
import store from '../index.js'

const ROOT_URL = 'https://api.spotify.com/v1/me'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED'
export const SELECTED_PLAYLIST_TRACKS = 'SELECTED_PLAYLIST_TRACKS'
export const SELECTED_PLAYLIST_VALENCE = 'SELECTED_PLAYLIST_VALENCE'

function getRequest(url) {
	let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

	const request = axios.get(url, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })

	return request
}

export function fetchPlaylists() {
	const url = `${ROOT_URL}/playlists`
	const request = getRequest(url)

	return {
		type: FETCH_PLAYLISTS,
		payload: request
	}
}

export function selectPlaylist(playlist) {
	const url = playlist.tracks.href
	const request = getRequest(url)

	return {
		type: PLAYLIST_SELECTED,
		payload: request
	}
}

export function fetchActivePlaylistTracks(playlist) {
	const url = playlist.tracks.href
	const request = getRequest(url)

	return {
		type: SELECTED_PLAYLIST_TRACKS,
		payload: request
	}
}


export function fetchValence(tracks) {
	const state = store.getState()
	console.log(store.activePlaylistTracks)
	// axios.get(playlist.tracks.href, {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   })
  // .then((response) => {
	// 	console.log(response)
  //   // return axios.get(...); // using response.data
  // })
  // .then((response) => {
  //   console.log('Response', response);
  // });
	//
	// const tracks = []
	// const request = getRequest(playlist.tracks.href)
	console.log('---------------')
	console.log(tracks)
	console.log('---------------')
	const ids = [1, 2, 3]
  // tracks.payload.forEach((track)=> {
  //   trackIds.push(track.track.id)
  // })
	// const playlistUrl = playlist.tracks.href
	// const playlistRequest = getRequest(playlistUrl)
	// playlistRequest.then((response) => {
	// 	console.log(response)
  // }

	// )
	const url = `https://api.spotify.com/v1/audio-features/?ids=${ids}`
	const request = getRequest(url)

	return {
		type: SELECTED_PLAYLIST_VALENCE,
		payload: request
	}
}
