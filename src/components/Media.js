require('normalize.css/normalize.css');
require('styles/App.css');
require('video-react/dist/video-react.css')

import React from 'react';
import {Player} from 'video-react';

class Media extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="video">
      <Player loop="loop" autoPlay="autoPlay" src="https://scontent-iad3-1.cdninstagram.com/vp/de7bc8f983141d186258182804bc7813/5A1D8370/t50.2886-16/21684934_2011120419120778_8495749287798374400_n.mp4"/>
    </div>);
  }
}

export default Media;
