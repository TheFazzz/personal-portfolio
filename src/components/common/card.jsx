import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";

// Card component displays icon, title, and body text info for Projects
const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} /> {/* Display project icons */}
					</div>
					<div className="card-title">{title}</div>
				</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
