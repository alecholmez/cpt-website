require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Social extends React.Component {
  render() {
    return (
        <div className="uk-section-default uk-section-large">
            <div className="uk-container">
                <h1>{'Meets'}</h1>
                <p>{'Bring your car down to University of Maryland, College Park at Lot Z from 6:30 to 7 P.M.'}</p>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.244394259897!2d-76.94474298422509!3d38.98691827955701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6909744e635%3A0x7c5807b85f8d5f97!2sZ%2C+College+Park%2C+MD+20740!5e0!3m2!1sen!2sus!4v1511731088977" allowFullScreen></iframe>
            </div>
        </div>
    );
  }
}

export default Social;
