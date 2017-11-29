require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Masthead extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-xlarge uk-light uk-text-center uk-background-fixed uk-background-norepeat uk-background-cover masthead-background" data-uk-parallax="bgy: -200">
          <div className="">
              <h1 className="uk-heading-hero">College Park Tuning</h1>
          </div>
      </div>
    );
  }
}

Masthead.defaultProps = {};

export default Masthead;