require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Masthead extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-xlarge  uk-section-transparent uk-light uk-text-center">
        <h1 className="uk-heading-hero">College Park Tuning</h1>
      </div>
    );
  }
}

Masthead.defaultProps = {
};

export default Masthead;
