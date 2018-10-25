import React from 'react';

const Profile = ({ user }) => {
	return (
		<React.Fragment>
			<h1>Profile page</h1>
			<p>Your login name is {user.username} and your password is {user.password}</p>
		</React.Fragment>
	);
}

export default Profile;