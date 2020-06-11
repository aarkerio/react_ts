import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App             from '../components/App';
import Recent          from '../components/Recent';
import NotFound        from '../components/NotFound';
import configureStore  from '../components/config/configureStore';     // load redux store

require('../src/stylesheet/main.scss');

const my_store = configureStore();

/** <Route path="*" component={NotFound} status={404} /> ***/

if ( document.getElementById('reactroot')) {
  ReactDOM.render(
    <Provider store={my_store}>
      <div>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/history" component={Recent} />
        </Router>
      </div>
    </Provider>,
    document.getElementById('reactroot')
  );
}
