import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Calls from './Calls';
import Gif from './Gif';
import Recent from './Recent';
import * as GiphyActionCreators from './actions/giphy';
import { AppState } from './redux/index';

interface IOwnProps {
  routeParams:    {}
  OneImgHashProp: {}
  SearchArrayProp: {}
  dispatch: any
  cookies: any
  router: any
}

interface StateProps {
  DataArrayProp: any[]
  SearchArrayProp: any[]
}

interface DispatchProps {
  loadData:   () => void
  loadSearch: () => void
}

type Props = StateProps & DispatchProps & IOwnProps;

interface RootState {
  loader: boolean
  searchText: string
  gif: {}
  DataArrayProp: any[]
  SearchArrayProp: any[]
}

const mapStateToProps = (state: RootState) => ({
  DataArrayProp:   state.DataArrayProp,
  SearchArrayProp: state.SearchArrayProp
});

const mapDispatchToProps = (dispatch: any, ownProps: IOwnProps) => ({
  loadSearch: () => dispatch( GiphyActionCreators.loadSearch(ownProps.searchText) ),
  loadData: () => dispatch( GiphyActionCreators.loadData() ),
  dispatch
});

class App extends Component<Props, RootState> {

  constructor(props: Props){
    super(props);
    this.state = {
      loader : false,
      searchText : '',
      DataArrayProp: {},
      gif : {}
    };
  }

  componentDidMount() {
    if ( ! this.state.DataArrayProp.length ) {
      let action = GiphyActionCreators.loadData();
      this.props.dispatch(action);
    }
  }

  handleChange(event: any) {
    const searchText = event.target.value;
    this.setState({
      searchText: searchText
    });
    if (searchText.length > 2) {
      // let action = GiphyActionCreators.loadData();
      // this.props.dispatch(action);
    }
  }

  handleKeyUp(event: any) {
    if (event.keyCode === 13) {
      // this.props.onSearch(this.state.searchText)
    }
  }

  render() {
    return (
      <div className="container_div">
        <div>
          <div className="search">
            <input type="text"
                   onChange ={this.handleChange.bind(this)}
                   onKeyUp = {this.handleKeyUp.bind(this)}
                   placeholder="Search GIF"
                   value={this.state.searchText}
            />
          </div>
        </div>
        <div>
          <Link to="/history">
            <button type="button" className="btn btn-primary">
              See history of searches
            </button>
          </Link>
        </div>
        <div>
          {this.props.SearchArrayProp.map((q, i) =>
            <div key={i} className="giphs_div">
              <div><b>Explanation</b>: {q.explanation}</div>
              <div><b>Hint</b>: {q.hint}</div>
              <div><b>Worth</b>: {q.worth}</div>
              <div><b>Active</b>: { q.active ? 'Enabled' : 'Disabled'} </div>
              <div><b>Type</b>: { q.qtype  ?  'Multiple Option' : 'Open question' } </div>
              <div className="right_button">
                <Link to={"/questionedit/"+q.id+"/"}>
                  <button type="button" className="btn btn-default btn-sm" title="Edit question">Edit </button>
                </Link>
              </div>
              { this.renderReorderButton(q.id, i, false) }
              </div>
            </div>
          )}
        </div>
    );
  }
}

export default connect<StateProps, any, IOwnProps>(mapStateToProps, mapDispatchToProps)(App);

