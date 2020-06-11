import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as GiphyActionCreators from './actions/giphy';

interface IPropTypes {
  search:    string
  dispatch:  any
  onChange:  any
}


class Recent extends Component<IPropTypes, any> {
  constructor(props: IPropTypes) {
    super(props)
    this.state = {
      gifs : {data:[]}
    };
    /*  TODO
     *  if ( ! Object.keys(this.props.HistoryHashProp).length ) {
     *   let action = GiphyActionCreators.fetchHistory();
     *   this.props.dispatch(action);
     * }
     */
  }

  render() {
    const listItems = this.state.gifs.data.map((item: any) =>
      <a href={item.url} target="new" key={item.id}>
        <img src={item.images.original.url} />
      </a>
    );
    return (
      <div className="pakageTrending">
        <h1>Your recent searches</h1>
        <div className="float-rigth"><br /><br /><br />
          <Link to="/history">
            <button type="button" className="btn btn-primary">
              Delete History
            </button>
          </Link>
        </div>

        <div className="trending">{listItems}</div>
      </div>
    )
  }
}

export default Recent;
