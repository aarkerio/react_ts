import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calls from './Calls';
import Gif from './Gif';
import Recent from './Recent';
import * as GiphyActionCreators from './actions/giphy';

interface ObjectLiteral {
  [key: string]: any
}

interface IPropTypes {
  routeParams:     ObjectLiteral
  OneTestHashProp: ObjectLiteral
  QuestionsArrayProp: any[]
  dispatch: any
  cookies: any
  router: any
}

class App extends Component<IPropTypes, any> {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            searchText : '',
            gif : {},
        };
    }

    searchGif(searchText) {
        this.setState({
            loader: true
        });
        this.getUrl(searchText, gif => { // callback(myJson)
            const getDetails = {
                image : gif.data.fixed_height_downsampled_url,
                title :  gif.data.title,
                gifUrl : gif.data.url
            };
            this.setState({
                loader : false,
                searchText: searchText,
                gif : getDetails
            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="inscApp">The GIF Search </h1>
                <Search
                    onSearch={this.searchGif.bind(this)}
                />
                <Gif
                    loader={this.state.loader}
                    data={this.state.gif}
                />
                <Trending />
            </div>
        );
    }
}

export default App;

const mapStateToProps = (state) => {
  return {
    TestsArrayProp: state.rootReducer.tests_rdcr.TestsArrayProp
  };
};

export default connect(mapStateToProps)(App);
