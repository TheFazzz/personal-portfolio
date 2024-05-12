import React, { useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";


import "./styles/homepage.css";

const Homepage = () => {
	// Data to display for Homepage
    const codedDescription = (
        <span>
            My journey into tech started in college, and it quickly grew into a passion for creating the behind-the-scenes 
			magic that makes apps run smoothly. While my current specialty lies in <strong>backend development</strong>, 
            I actively explore various technologies to expand my skill set and build a diverse array of projects.
        </span>
    )

    const codedTitle = (
        <span>
            Hello, I'm David Fazio. I'm a software engineer based in Southern California.
        </span>
    )

    useEffect(() => {
		document.title = `${INFO.main.title}`;
	}, []);

	// Display homepage content
	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="home" /> {/* Render NavBar component, set active to current page */}
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title !== "" ? INFO.homepage.title : codedTitle}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description !== "" ? INFO.homepage.description : codedDescription}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="../home_page.jpg"
											alt="home"
											className="homepage-image"
										/> {/* Display homepage image */}
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials"> {/* Social media links section */}
                            <a // LinkedIn link
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a // Github link
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a // Email link
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects /> {/* Render AllProjects component */}
						</div>

						<div className="page-footer">
							<Footer /> {/* Render Footer component */}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
