require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Masthead from './Masthead';
import Media from './Media';
import Social from './Social';
import Marketing from './Marketing';
import BreakerImage from './BreakerImage';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
            <Masthead />
            <Media />
            <Marketing />
            <BreakerImage />
            <Social />
        </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;