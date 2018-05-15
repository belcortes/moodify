import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlaylistList from './containers/PlaylistList'
import ActivePlaylist from './containers/ActivePlaylist'
import { fetchPlaylists } from './actions/index'

class App extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="App">
        moodify
        <PlaylistList />
        <ActivePlaylist />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPlaylists: () => { dispatch(fetchPlaylists()); }
  };
}

export default connect(null, mapDispatchToProps)(App);
