import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
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
  SearchArrayProp: any[]
  DataArrayProp: any[]
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

  static propTypes = {
    SearchArrayProp: PropTypes.array,
    DataArrayProp:   PropTypes.array,
    dispatch:        PropTypes.func,
  }

  constructor(props: Props){
    super(props);
    this.state = {
      loader : false,
      searchText : '',
      gif : {}
    };
  }

  /* componentDidMount() {
   *   if ( ! this.state.DataArrayProp.length ) {
   *     let action = GiphyActionCreators.loadData();
   *     this.props.dispatch(action);
   *   }
   * }
   */
  render() {
    return (
      <div className="container_div">
        <div>

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

          </tbody>
        </table>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  DataArrayProp: state.giphy_rdcr.DataArrayProp,
  giphy_rdcr: state.giphy_rdcr,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators({loadData: GiphyActionCreators.loadData}, dispatch);

// <any,DispatchProps,IOwnProps>
export default connect<any,any,IOwnProps>(mapStateToProps, mapDispatchToProps)(App);

