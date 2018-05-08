import axios from 'axios'
import queryString from 'query-string';

const ROOT_URL = 'https://api.spotify.com/v1/me'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED'
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

export function selectedPlaylistValence(playlist) {
	const tracks = selectPlaylist(playlist)
	const trackIds = []
    tracks.forEach((track)=> {
      trackIds.push(track.track.id)
    })

	const url = `https://api.spotify.com/v1/audio-features/?ids=${trackIds}`
	const request = getRequest(url)

	return {
		type: SELECTED_PLAYLIST_VALENCE,
		payload: request
	}
}