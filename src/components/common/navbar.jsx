import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
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
					: <li><NavLink to="/profile"><i className="fa fa-user"></i></NavLink></li>
				}
			</ul>
		</nav>
	);
}

export default NavBar;