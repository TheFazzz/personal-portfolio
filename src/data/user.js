const INFO = {
	main: {
		title: "David",
		name: "David Fazio",
		email: "davidfazio1102@gmail.com"
	},

	socials: {
		github: "https://github.com/TheFazzz",
		linkedin: "https://www.linkedin.com/in/david-fazio-386456304/",
	},

	homepage: {
		title: "",
		description: "",
	},

	about: {
		title: "",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

    project: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Personal Portfolio Site",
			description:
				`A simple and responsive web app to showcase my projects, contact information, and about me info.`,
            
            
			logos: [
                "../react.png"
            ],
			linkText1: "GitHub",
			link1: "https://github.com/TheFazzz",
			linkText2: "Live",
			link2: "https://github.com/TheFazzz"
            
		},

		{
			title: "TravelFit",
			description:
				`TravelFit is a fitness mobile app for people traveling. It allows users to look up local
				gyms whereever they are and view guest passes. Users can compare prices, view photos, 
				amenities, and purchase passes directly through the app.`,
            logos: [
                "../python.png",
                "../postgresql.png",
                "../react.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/TheFazzz/TravelFit"
		},

		{
			title: "TuffyHealth",
			description:
				`Tuffy Health is Full-Stack web application developed using ASP.NET, designed to facilitate 
				seamless doctor-patient interactions. This platform enables efficient scheduling, communication, 
				and information sharing between healthcare professionals and their patients.`,
            logos: [
                "../c_sharp.png",
                "../sql.png",
                "../html.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/TheFazzz/TuffyHealthNew"
		}
	],
};

export default INFO;
