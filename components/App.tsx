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
  gif: {}
  DataArrayProp: any[]
  SearchArrayProp: any
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
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    });
  }

  prevProperty() {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    });
  }

  render() {
    {
      this.props.SearchArrayProp.map((value, index) =>
        console.log("  ############  VALUE :  >>>> " + JSON.stringify(value.url))
      )
    }
    const {properties, property} = this.state;
    return (
        <div className="App">

          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length-1}
          >Next</button>
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >Prev</button>

          <div className="page">
            <section>
              <h1>Image slideshow From Giphy.</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    this.props.SearchArrayProp.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>

          </div>
          <div className="float-rigth">
            <Link to="/history">
              <button type="button" className="btn btn-primary">
                See history of searches
              </nbutton>
            </Link>
          </div>n
        </div>
    );
  }
}

export default connect<any, any, IOwnProps>(mapStateToProps, mapDispatchToProps)(App);

