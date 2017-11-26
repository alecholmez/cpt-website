require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Social extends React.Component {
  render() {
    return (
        <div className="uk-section uk-section-default">
            <div className="uk-container">
                <h1 className="uk-text-center">{'Where To Find Us'}</h1>
                <hr />
                <div className="uk-flex uk-flex-center uk-margin-bottom">
                    <div data-uk-grid>
                        <div>
                            <a className="uk-link-muted" href="https://www.instagram.com/collegeparktuning/"><span className="uk-margin-small-right" data-uk-icon="icon: instagram; ratio: 2"></span>Instagram</a>
                        </div>
                        <div>
                            <a className="uk-link-muted" href="https://twitter.com/CPTmademedoit"><span className="uk-margin-small-right" data-uk-icon="icon: twitter; ratio: 2"></span>Twitter</a>
                        </div>
                    </div>
                </div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.244394259897!2d-76.94474298422509!3d38.98691827955701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6909744e635%3A0x7c5807b85f8d5f97!2sZ%2C+College+Park%2C+MD+20740!5e0!3m2!1sen!2sus!4v1511731088977" allowFullScreen></iframe>
            </div>
        </div>
    );
  }
}

export default Social;
