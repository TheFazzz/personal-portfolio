import React from "react";
import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

// AllProjects component that displays list of all Projects
const AllProjects = () => {
	return (
		<div className="my-projects">
			 <div className="all-projects-intro">  {/* Introduction section */}
                <h2>Check Out My Projects</h2>
                <p>
					<strong>Below</strong> showcases various projects I've worked on. Feel free to check them out on Git.
				</p>
            </div>
			<div className="all-projects-container"> {/* Container for the project list */}
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}> {/* Individual project container */}
						<Project
							// Pass project data as props to the Project component
							logos={project.logos}
							title={project.title}
							description={project.description}
							linkText1={project.linkText1}
							link1={project.link1}
							linkText2={project.linkText2}
							link2={project.link2}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;