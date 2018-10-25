import React, { Component } from 'react';

class Login extends Component {
	state = {
		username: '',
		password: '',
		error: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.username !== 'Admin' || this.state.password !== '12345') {
			this.setState({
				username: '',
				password: '',
				error: 'Incorrect user or password...'
			})
		} else {
			this.props.onLogin({ username: this.state.username, password: this.state.password });
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
		return (
			<React.Fragment>
				<h1>Sign in</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="field-wrp">
						<label className="label" htmlFor=""></label>
						<input onChange={this.handleChange} value={this.state.username} name="username" className="field" type="text" placeholder="Login" />
					</div>
					<div className="field-wrp">
						<label className="label" htmlFor=""></label>
						<input onChange={this.handleChange} value={this.state.password} name="password" className="field" type="password" placeholder="Password" />
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
		return this.state.username.length === 0 || this.state.password.length === 0;
	}
}

export default Login;