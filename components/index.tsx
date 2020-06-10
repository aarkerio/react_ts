import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App             from '../components/App';
import Recent          from '../components/Recent';
import NotFound        from '../components/NotFound';
import configureStore  from '../components/config/configureStore';     // load redux store

const my_store = configureStore();

if ( document.getElementById('reactroot')) {
  ReactDOM.render(
    <Provider store={my_store}>
      <div>
        { /* Tell the Router to use our enhanced history */ }
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/search/:id" component={Recent} />
          <Route path="*" component={NotFound} status={404} />
        </Router>
      </div>
    </Provider>,
    document.getElementById('reactroot')
  );
}
