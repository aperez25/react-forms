import React from 'react';
import NewPlaylist from './NewPlaylist';
import axios from 'axios';

class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistValue: '',
      buttonDisabled: false
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.buttonBool = this.buttonBool.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      playlistValue: ''
    })
  }

  buttonBool(evt) {
    if (evt.target.value.length === 0 || evt.target.value.length > 17) {
      this.setState({
        buttonDisabled: true
      })
    }
    else {
      this.setState({
        buttonDisabled: false
      })
    }
  }

  handleChange(evt) {
    this.setState({
      playlistValue: evt.target.value
    })
    this.buttonBool(evt);
  }

  render () {
    return (
      <div>
      { this.state.buttonDisabled ? <div className="alert alert-warning">Please enter a shorter playlist name</div> : null }
        <NewPlaylist
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputValue={this.state.playlistValue}
        disabled={this.state.buttonDisabled}
        />
      </div>
    );
}
}

export default PlaylistInput;
