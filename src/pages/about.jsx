import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	// Data to display for About page
    const codedDescription = (
        <span>
            <p>
				Hello! I'm a motivated Computer Science graduate from California State University, Fullerton, with a passion for web 
				and mobile development. My educational and project experiences have equipped me with a robust set of skills in 
				programming languages and frameworks such as Java, Python, C++, JavaScript, SQL, DynamoDB, React, Node.js, Django, 
				and FastAPI. My strength lies in backend development and database management, where I excel in building efficient, 
				scalable systems that power user-centric applications.
            </p>
            <p>
				Outside of coding, I'm an avid adventurer and outdoor enthusiast. From snowboarding and camping to off-roading and hiking, 
				I embrace the thrill of exploring new terrains and pushing my limits. These activities not only fuel my physical energy 
				but also inspire creativity and problem-solving skills that I bring back to my professional work.
            </p>
            <p>
				As I move ahead in my career, I am eager to contribute to innovative projects and collaborate with teams that are as 
				passionate about leveraging technology to solve complex problems as I am. Whether it's scaling applications or enhancing 
				user experiences, I am always ready to dive into new challenges and make a meaningful impact.
            </p>
        </span>
    )

    const codedTitle = (
        <span>
            Get to know me!
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	// Display About page content
	return (
		<React.Fragment>
		{/* Wrap content in React.Fragment to avoid unnecessary DOM elements */}
			<div className="page-content">
				<NavBar active="about" /> {/* Render NavBar comp, set active to current page */}
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle} {/* Display Title */}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription} {/* Display description */}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about_page.jpg"
											alt="about"
											className="about-image"
										/> {/* Display about photo */}
									</div>
								</div>

								<div className="about-socials">
									<Socials /> {/* Render Socials component */}
								</div>
							</div>
						</div>
						<div className="about-socials-mobile"> {/* social links for mobile devices */}
							<Socials /> {/* Render Socials component for mobile */}
						</div>
					</div>
					<div className="page-footer">
						<Footer /> {/* Render Footer component */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
