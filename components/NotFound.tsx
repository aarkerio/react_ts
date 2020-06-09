import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component<any, any> {

  render() {
    return (
        <div className="container">
          <h1>Error 404! Page not found. Es tut uns leid.</h1>
          <Link to="/">Go to home</Link>
        </div>
    );
  }
}
