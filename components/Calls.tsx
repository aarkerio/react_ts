import React, { Component } from 'react';

interface ObjectLiteral {
  [key: string]: any
}

interface IPropTypes {
  routeParams:     ObjectLiteral
  SearchArrayProp: any[]
  onSearch: any
  cookies: any
  router: any
}

class Calls extends Component<IPropTypes, any> {
  constructor(props: IPropTypes) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event: any) {
    const searchText = event.target.value;
    this.setState({
      value: searchText
    });
    if(searchText.length > 2) {
      this.props.onSearch(searchText)
    }
  }

  handleKeyUp(event: any) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchText)
    }
  }

  render() {
    return (
      <div className="search">
        <input type="text"
               onChange ={this.handleChange.bind(this)}
               onKeyUp = {this.handleKeyUp.bind(this)}
               placeholder="Search GIF"
               value={this.state.value}
        />
      </div>
    );
  }
}

export default Calls;
