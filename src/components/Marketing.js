require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Marketing extends React.Component {
  render() {
    return (<div className="uk-section uk-section-muted">
      <div className="uk-container">
        <div className="uk-child-width-expand@s" data-uk-grid="data-uk-grid">
          <div>
            <h1 className="uk-text-center">{'Meets'}</h1>
            <p>{'We meet every Thursday from 6:30 to 7 P.M. in Lot Z of the University Of Maryland, College Park campus.'}</p>
          </div>
          <div>
            <h1 className="uk-text-center">{'About Us'}</h1>
            <p>{'We are the official car club of the University of Maryland. We take pride in our culture, but most importantly, our cars.'}</p>
          </div>
          <div>
            <h1 className="uk-text-center">{'Cruises'}</h1>
            <p>{'We cruise to a random destination after every meet. Underground car shows, new restaraunts, and various scenic overlooks are perfect spots for admiring our cars.'}</p>
          </div>
        </div>

      </div>
    </div>);
  }
}

export default Marketing;
