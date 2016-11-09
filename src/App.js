
import React, { Component } from 'react';
import moment from 'moment';
import { Provider } from 'mobx-react';

import './App.css';

import Time from './Time';
import Clock from './Clock';

class App extends Component {
  render() {
      return (
          <Provider Clock={Clock}>
              <div className="App">
                  <div className="App-intro">
                      <Time until={moment().add(10, 'minutes')} />
                      <Time since={moment().subtract(5, 'minutes')} />
                      <Time />
                  </div>
              </div>
          </Provider>
    );
  }
}

export default App;
