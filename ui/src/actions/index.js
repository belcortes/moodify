import axios from 'axios'
import queryString from 'query-string';

const ROOT_URL = 'https://api.spotify.com/v1/me/'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'

export function fetchPlaylists() {
	let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

	const url = `${ROOT_URL}playlists`
	const request = axios.get(url, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })

	return {
		type: FETCH_PLAYLISTS,
		payload: request
	}
}