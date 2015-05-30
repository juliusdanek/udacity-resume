var bio = {
	"name": "Julius Danek",
	"role": "Product Manager",
	"contactInfo": "juliusdanek@gmail.com",
	"pictureUrl": "images/Beach_small.jpg",
	"welcome": "Hi, I am Julius, welcome to my resume!",
	"skills": ["Cooking", "Cleaning", "Reading"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var education = {
	"schools": [
		{
			"name": "Masachusetts Institute of Technology",
			"degree": "Master of Finance",
			"major": "Finance"
			"graduationYear": 2015,
			"city": "Cambridge, MA",
			"url": "http://mit.edu"
		},
		{
			"name": "Utrecht University",
			"degree": "Bachelor of Science",
			"major": "Economics",
			"graduationYear": 2013,
			"city": "Utrecht, the Netherlands",
			"url": "http://uu.nl"
		}]
};

var work = {
	"jobs": [
	{
		"employer": "Goetzpartners",
		"title": "Consulting Intern",
		"location": "Munich, Germany",
		"dates": 2013,
		"description": "Worked as a consultant for boutique consulting firm Goetzpartners in Munich from 
		October 2013 to February 2014"
	},
	{
		"employer": "Al-Deera USA",
		"title": "Summer Intern",
		"location": "New York City, NY",
		"dates": 2011,
		"description": "Worked as a summer intern for VC firm Al-Deera USA in New York City from 
		July 2011 to August 2011"		
	}
	]
};