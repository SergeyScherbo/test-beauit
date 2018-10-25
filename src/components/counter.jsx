import React, { Component } from 'react';

class Counter extends Component {

	state = {
		counter: 0
	};

	handleIncrement = () => {
		this.setState(currentState => {
			return { counter: currentState.counter + 1 };
		});
	}

	handleDecrement = () => {
		this.setState(currentState => {
			const counter = currentState.counter < 1 ? 0 : currentState.counter - 1;
			return { counter };
		});
	}

	render() {
		return (
			<React.Fragment>
				<h1>Counter</h1>
				<div className="counter">
					<div className="counter__btns">
						<button className="button button--primary button--squared" onClick={this.handleIncrement}><i className="fa fa-plus"></i></button>
						<button className="button button--default button--squared" onClick={this.handleDecrement}><i className="fa fa-minus"></i></button>
					</div>
					<div className="counte__value">{this.state.counter}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Counter;