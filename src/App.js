import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: props.clicked
    };
    this.handleClick = this.handleClick.bind(this);

  }


  //handler goes here
  handleClick() {
   this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Greetings!</h1>
        <div
          className="button"
          onClick={this.handleClick}
        >
            {this.state.clicked ? 'Thanks!' : 'Click me!'}
        </div>
      </div>
    );
  }
}