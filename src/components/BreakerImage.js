require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class BreakerImage extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-xlarge uk-light uk-text-center uk-background-fixed uk-background-norepeat uk-background-cover uk-background-top-center audi-background" data-uk-parallax="bgy: -200">
          <div className="">
          </div>
      </div>
    );
  }
}

BreakerImage.defaultProps = {};

export default BreakerImage;