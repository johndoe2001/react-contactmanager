import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {

	const {branding} = props;

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">{branding}</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link"><i className="fas fa-home"></i>Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/add-contact" className="nav-link"><i className="fas fa-plus"></i>Add</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link"><i className="fas fa-question"></i>About</Link>
						</li>
						<li className="nav-item">
							<Link to="/test" className="nav-link"><i className="fas fa-question"></i>Test</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

Header.defaultProps = {
	branding: "My Contact Manager"
}

Header.propTypes = {
	branding: propTypes.string.isRequired
}


export default Header;