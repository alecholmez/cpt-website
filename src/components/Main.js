require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Masthead from './Masthead';
import Media from './Media';
import Social from './Social';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <Masthead />
            <Media />
            <Social />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
