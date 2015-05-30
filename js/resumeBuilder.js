var bio = {
	"name": "Julius Danek",
	"role": "Knowledge Seeker",
	"contacts": {
		"email": "juliusdanek@gmail.com",
		"location": "Cambridge, USA",
		"website": "<a href='http://www.juliusdanek.de' target='_blank' class='website'> www.juliusdanek.de </a>"
	},
	"pictureUrl": "images/Beach_small.jpg",
	"welcome": "Hi, I am Julius, welcome to my resume!",
	"skills": ["Cooking", "Cleaning", "Reading"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureUrl);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
$("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.website))
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location))
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome))

var education = {
	"schools": [
		{
			"name": "Masachusetts Institute of Technology",
			"degree": "Master of Finance",
			"major": "Finance",
			"graduationYear": "2014 - 2015 ",
			"location": "Cambridge, MA",
			"url": "http://www.mit.edu"
		},
		{
			"name": "Utrecht University",
			"degree": "Bachelor of Science",
			"major": "Economics",
			"graduationYear": "2010 - 2013 ",
			"location": "Utrecht, the Netherlands",
			"url": "http://www.uu.nl"
		}]
}

var work = {
	"jobs": [
	{
		"employer": "Goetzpartners",
		"title": "Consulting Intern",
		"location": "Munich, Germany",
		"dates": 2013,
		"description": "Worked as a consultant for boutique consulting firm Goetzpartners in Munich from October 2013 to February 2014"
	},
	{
		"employer": "Al-Deera USA",
		"title": "Summer Intern",
		"location": "New York City, NY",
		"dates": 2011,
		"description": "Worked as a summer intern for VC firm Al-Deera USA in New York City from July 2011 to August 2011"		
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Google Maps Project",
		"dates": "30.05.2015",
		"description": "An interactive Google Map",
		"images": "images/maps.png"
	}]
}

// projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	$(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[0].title));
	$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[0].dates));
	$(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
	$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[0].images));
}

projects.display();

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	var formattedSkill;
	for (x in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[x])
		$("#skills").append(formattedSkill)
	}
};

function displayWork() {
	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);	
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
	}
}

displayWork();

education.display = function() {
	for (i in work.jobs) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);	
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var schoolDegree = formattedSchoolName + formattedDegree
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].graduationYear);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

		$(".education-entry:last").append(schoolDegree, formattedDates, formattedLocation, formattedMajor);
	}
}

education.display();

function inName(name) {
    var finalName = name;
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// $("#main").append(internationalizeButton)

$("#mapDiv").append(googleMap);
	