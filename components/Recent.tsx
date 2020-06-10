import React, { Component } from 'react';
import * as GiphyActionCreators from './actions/giphy';

interface IPropTypes {
  answer: {id:      number,
           correct: boolean,
           active:  boolean,
           answer:  string },
  keyRow:    string,
  dispatch:  any,
  onChange:  any
}


class Recent extends Component<IPropTypes, any> {
  constructor(props: IPropTypes) {
    super(props)
    this.state = {
      gifs : {data:[]}
    };
    /* if ( ! Object.keys(this.props.TestsHashProp).length ) {
     *   let action = GiphyActionCreators.fetchHot(this.state.user_id);
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
        <h1>Top Trending</h1>
        <div className="trending">{listItems}</div>
      </div>
    )
  }
}

export default Recent;
