import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import Recent from './Recent';
import * as GiphyActionCreators from './actions/giphy';
import { AppState } from './redux/index';

interface IOwnProps {
  routeParams:    {}
  OneImgHashProp: {}
  SearchArrayProp: any
  searchText: string
  dispatch: any
  cookies: any
  router: any
}

interface StateProps {
  DataArrayProp: any[]
  SearchArrayProp: any
}

interface DispatchProps {
  loadData:   () => void
  loadSearch: () => void
}

type Props = StateProps & DispatchProps & IOwnProps;

interface RootState {
  loader: boolean
  searchText: string
  DataArrayProp: any[]
  SearchArrayProp: any
  properties: any
  property: any
}

const mapStateToProps = (state: any) => {
  return {
    SearchArrayProp: state.rootReducer.giphy_rdcr.SearchArrayProp
  };
};


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
      DataArrayProp: [],
      SearchArrayProp: [],
      properties: {},
      property: 0
    };
  }

  handleChange(event: any) {
    const searchText = event.target.value;
    this.setState({
      searchText: searchText
    });
    if (searchText.length > 2) {
      let action = GiphyActionCreators.loadSearch(this.state.searchText);
      this.props.dispatch(action);
    }
  }

  nextProperty() {
    console.log("  ############  NEXT STATE PROPERTY :  >>>> " +  this.state.property);
    const newIndex = this.state.property + 1;
    this.setState({
      property: newIndex
    });
  }

  prevProperty() {
    const newIndex = this.state.property - 1;
    this.setState({
      property: newIndex
    });
  }

  render() {
    {
      this.props.SearchArrayProp.map((value, index) =>
        console.log("  ############ index >> " + index)
      )
    }
    console.log("  ############  STATE PROPERTY :  >>>> " +  this.state.property);
    const {properties, property} = this.state;
    const currentLength = this.props.SearchArrayProp.length;
    console.log("  ############  currentLength :  >>>> " + JSON.stringify(currentLength))
    return (
      <div className="App">
        <button
          onClick={this.prevProperty.bind(this)}
          disabled={this.state.property === 0}
        >Prev</button>
        <button
          onClick={this.nextProperty.bind(this)}
          disabled={this.state.property === (currentLength.length - 1)}
        >Next</button>
        <br />
        <div className="page">
          <div className="search">
            <input type="text"
                   onChange ={this.handleChange.bind(this)}
                   placeholder="Search GIF"
                   value={this.state.searchText}
            />
          </div>
          <section>
            <h1>Image slideshow From Giphy.</h1>
          </section>
          <div className="col">
            <div className={`cards-slider active-slide-${this.state.property}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${this.state.property * (100 / currentLength)}%)`
              }}>
                {
                  this.props.SearchArrayProp.map((property, index) => <Card key={property.id} index={index} property={property} />)
                }
              </div>
            </div>
          </div>

        </div>
        <div className="float-rigth"><br /><br /><br />
          <Link to="/history">
            <button type="button" className="btn btn-primary">
              See history of searches
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect<any, any, IOwnProps>(mapStateToProps, mapDispatchToProps)(App);

