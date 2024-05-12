import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

// Project component takes properties to display project details
const Project = (props) => {
	const { logos, title, description, linkText1, link1, linkText2, link2 } = props;

	// render logos based on image data type
    function renderLogos() {
        if (Array.isArray(logos)){
            return logos.map((logo, index) => (
                <img key={index} src={logo} alt={`logo-${index}`} />
            ))
        } else {
            return <img src={logos} alt={`logo`} />
        }
    }

	// dislplay project details
	return (
		<React.Fragment>
			{/* Wrap content in React.Fragment to avoid unnecessary DOM elements */}
			<div className="project">
					<div className="project-container">
						<div className="project-logos">{renderLogos()}</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-links">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} /> {/* Displays link icon using FontAwesome */}
							</div>
                            <Link to={link1}>
							    <div className="project-link-text">{linkText1}</div>
                            </Link>
                            <Link to={link2}>
							    <div className="project-link-text">{linkText2}</div>
                            </Link>
						</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
