import React from 'react';
import NewPlaylist from './NewPlaylist';

class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistValue: '',
      buttonActive: false
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
        buttonActive: true
      })
    }
    else {
      this.setState({
        buttonActive: false
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
        <NewPlaylist
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputValue={this.state.playlistValue}
        disabled={this.state.buttonActive}
        />
      </div>
    );
}
}

export default PlaylistInput;
