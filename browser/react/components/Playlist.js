import React from 'react';
import { Link } from 'react-router';
import Songs from './Songs';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }
  render () {
    const playlist = this.props.selectedPlaylist;

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}
