require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Media extends React.Component {
  render() {
    return (
        <div className="">
            <video className="video" loop autoPlay>
                <source src="https://scontent-iad3-1.cdninstagram.com/vp/de7bc8f983141d186258182804bc7813/5A1D8370/t50.2886-16/21684934_2011120419120778_8495749287798374400_n.mp4" type="video/mp4" />
                Your Browser does not support this video tag.
            </video>
        </div>
    );
  }
}

export default Media;
