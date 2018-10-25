import React, { Component } from 'react';
import { getUserFromDB } from '../utils/users';

class Login extends Component {
	state = {
		username: '',
		password: '',
		error: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { username, password } = this.state;

		if (getUserFromDB({ username, password }) === undefined) {
			this.setState({
				username: '',
				password: '',
				error: 'Incorrect user or password...'
			})
		} else {
			this.props.onLogin({ username, password });
			this.props.history.push('/');
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value,
			error: ''
		});
	}

	render() {
		const { username, password } = this.state;

		return (
			<React.Fragment>
				<h1>Sign in</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="field-wrp">
						<label className="label" htmlFor=""></label>
						<input onChange={this.handleChange} value={username} name="username" className="field" type="text" placeholder="Login" />
					</div>
					<div className="field-wrp">
						<label className="label" htmlFor=""></label>
						<input onChange={this.handleChange} value={password} name="password" className="field" type="password" placeholder="Password" />
					</div>
					<div className="button-wrp">
						<button disabled={this.basicValidate()} className="button button--primary">Submit</button>
						<span className="error">{this.state.error}</span>
					</div>
				</form>
			</React.Fragment>
		);
	}

	basicValidate() {
		const { username, password } = this.state;
		return username.length === 0 || password.length === 0;
	}
}

export default Login;