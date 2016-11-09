
import React, { Component } from 'react';
import moment from 'moment';

import './App.css';

import Time from './Time';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-intro">
                <Time until={moment().add(10, 'minutes')} />
                <Time since={moment().subtract(5, 'minutes')} />
                <Time />
            </div>
        </div>
    );
  }
}

export default App;
