import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';



class App extends Component {
  render() {        
    return (
      <div>
        <JumboTronComponent>this is a super long sentence and i want to pass it to the child as a child componen this.props.children from the app component down to the jumbotron component.
        </JumboTronComponent>
        <Products />        
      </div>
    );
  }
}

export default App;
