import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUserLocally } from '../../utils/users';

const NavBar = ({ user, onLogout }) => {
	return (
		<nav className="navigation">
			<ul className="navigation__main">
				<li>
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/counter">Counter</NavLink>
				</li>
			</ul>

			<ul className="navigation__additional">
				{!user
					? <li><NavLink to="/login">Sign in</NavLink></li>
					: (
						<React.Fragment>
							<li><NavLink to='/profile'><i className="fa fa-user"></i></NavLink></li>
							<li><NavLink to="/" onClick={onLogout}>Logout</NavLink></li>
						</React.Fragment>
					)
				}
			</ul>
		</nav>
	);
}

export default NavBar;