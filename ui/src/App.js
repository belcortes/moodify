import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
  return bindActionCreators({fetchPlaylists}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
