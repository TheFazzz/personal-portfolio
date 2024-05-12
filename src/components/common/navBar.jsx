import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

// NavBar component that displays navigation bar
const NavBar = (props) => {
	const { active } = props; // currently active page

	// Display navigation bar
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={		// Set class name base on active prop
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
