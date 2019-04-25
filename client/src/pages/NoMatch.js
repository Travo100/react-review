import React, { Component } from 'react';

class NoMatch extends Component {

  render() {
    return (
        <div className="no-match">
            <h1><span role="img" aria-label="a robot emoji">🤖</span> Page Not Found!</h1>
        </div>
    )
  }
}


export default NoMatch;
