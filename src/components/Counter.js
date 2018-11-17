import React, { Component } from 'react';

class Counter extends Component {

	// Mounting:
	componentWillMount() {
		//once in life time of component
		debugger; // no set state
    console.log('Mounting: componentWillMount');
  }

  componentDidMount() {
		//once in life time of component
    console.log('Mounting: componentDidMount');
  }



  // Updating
  componentWillReceiveProps(nextProps) {
    console.log('Updating: componentWillReceiveProps');
    // console.log(nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
  		console.log(nextProps);
  	if(nextProps.count >= 5){
  		return false
  	}
  	else{
	    // console.log('shouldComponentUpdate');
	    return true;
  	}
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Updating:componentDidUpdate');
  }

  render() {
  	console.log('counter component rendering');
  	let {count} = this.props;
  	return (
  		<div>
	  		<div className="counter">count: {count}</div>
	  		<div>Mounting</div>
	  		<div>Updating</div>
	  		<div>Un Mounting</div>
  		</div>
  	)
  }
}

export default Counter;