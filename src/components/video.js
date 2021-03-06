import React from 'react';
import YouTube from 'react-youtube';
 
class YoutubeVideo extends React.Component {
  render(props) {
    const opts = {
      height: '390',
      width: '80%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
 
    return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeVideo;