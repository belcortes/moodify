import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

class App extends Component {
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    // axios.get('https://api.spotify.com/v1/me/playlists', {
    //   headers: {'Authorization': 'Bearer ' + accessToken}
    // }).then(response => console.log(response.data))
    // .catch((error) => {
    //         console.log('Error retrieving!')
    //         console.log(error)
    //     })

    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getPlaylist((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="App">
        moodify
      </div>
    );
  }
}

export default App;
