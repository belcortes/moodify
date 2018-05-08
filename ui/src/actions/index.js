import axios from 'axios'
import queryString from 'query-string';

const ROOT_URL = 'https://api.spotify.com/v1/me'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED'

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
	const url = `${ROOT_URL}/playlists/${playlist.id}/tracks`
	const request = getRequest(url)

	return {
		type: PLAYLIST_SELECTED,
		payload: request
	}
}