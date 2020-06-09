import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppComponent            from '../components/App';
import RecentComponent         from '../components/Recent';
import NotFound                from '../components/NotFound';
import configureStore          from '../components/config/configureStore';     // load redux store

const my_store = configureStore();
// const history  = syncHistoryWithStore(browserHistory, my_store);   // mix redux and route

if ( document.getElementById('reactroot')) {
  ReactDOM.render(
    <Provider store={my_store}>
      <div>
        { /* Tell the Router to use our enhanced history */ }
        <Router>
          <Route exact path="/" component={AppComponent} />
          <Route path="/search/:id" component={RecentComponent} />
          <Route path="*" component={NotFound} status={404} />
        </Router>
      </div>
    </Provider>,
    document.getElementById('reactroot')
  );
}
