import React, { Component } from 'react';
import '../css/App.css';
import Counter from '../components/Counter';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showCounter: true,
			count: 0
		}
	}

	toggleButton(){
		let {showCounter} = this.state;
		this.setState({
		  showCounter: !showCounter
		});
	}

	increment(){
		let {count} = this.state;
		this.setState({
			count: count+1
		})
	}

  render() {
  	let {showCounter, count} = this.state;

    return (
      <div className="App">
        <h2 className="title">React Life Cycle Methods - Counter application</h2>
        <div className="buttonsContainer">
        	<button className="button showHideButton" onClick={this.toggleButton.bind(this)}>{showCounter ? "Hide" : "Show"}</button>
        	<button className="button counterButton" onClick={this.increment.bind(this)}>Increment</button>
      	</div>
      	{
      		showCounter && <Counter count={count} />
      	}
      </div>
    );
  }
}

export default App;
