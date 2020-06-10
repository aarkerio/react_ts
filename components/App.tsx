import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Calls from './Calls';
import Gif from './Gif';
import Recent from './Recent';
import * as GiphyActionCreators from './actions/giphy';
import { RootState } from './redux/index';

interface IOwnProps {
  routeParams:    {}
  OneImgHashProp: {}
  SearchArrayProp: any[]
  dispatch: any
  cookies: any
  router: any
}

interface StateProps {
  propFromReduxStore: string
}

interface DispatchProps {
  onSomeEvent: () => void
}

type Props = StateProps & DispatchProps & IOwnProps;

interface State {
  loader: boolean
  searchText: string
  gif: {}
}

class App extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      loader : false,
      searchText : '',
      gif : {},
    };
    if ( ! this.props.SearchArrayProp.length ) {
      let action = GiphyActionCreators.loadData(this.state.searchText);
      this.props.dispatch(action);
    }
  }

  render() {
    let rows = [];
    // this.props.SearchArrayProp.forEach(function(img) {
    //  rows.push(<TestRowComponent img={img} key={img.id} keyRow={img.id} />);
    // });

    return (
      <div className="container_div">
        <div>
          <Calls
            onSearch={ this.props.dispatch("loadData") }
          />
        </div>
        <div>
          <Link to="/testnew">
            <button type="button" className="btn btn-primary">
              New Test
            </button>
          </Link>
        </div>
        <table className="table_class">
          <thead>
            <tr>
              <th style={{width: '35px', textAlign:'center', padding:0}} key='kedit'>Edit</th>
              <th style={{width: '35px', textAlign:'center', padding:0}} key='kdel'>Delete</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  SearchArrayProp: state.giphy_rdcr.SearchArrayProp,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      action: GiphyActionCreators.loadData,
    },
    dispatch
  );

// <any,DispatchProps,IOwnProps>
export default connect<any,any,IOwnProps>(mapStateToProps, mapDispatchToProps)(App);

