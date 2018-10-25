import React, { Component } from 'react';
import { getUserLocally } from '../utils/users';


class Profile extends Component {
	state = {
		user: {}
	}

	componentDidMount() {
		const user = getUserLocally();
		this.setState({
			user
		});
	}

	render() {
		const { username, password } = this.state.user;

		return (
			<React.Fragment>
				<h1>Profile page</h1>
				<p>Your login name is {username} and your password is {password}</p>
			</React.Fragment>
		);
	}
}

export default Profile;