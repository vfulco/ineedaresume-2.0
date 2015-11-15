resumeApp.factory('personal', [function(){
    var o = {
        personal: [
            {name: "Mitch Samuels", email: "samuels.mitch@gmail.com", phone: "507-330-5897"}
        ]
    }
    return o;
}]);

resumeApp.factory('social', [function(){
    var o = {
        social: [
            {linkedin: "/in/mitchas", twitter: "@sleumasm", skype: "mitch-samuels", github: "github.com/mitchas", dribbble: "dribbble.com/mitchas", link: "mitchs.co"}
        ]
    }
    return o;
}]);


resumeApp.factory('summary', [function(){
    var o = {
        summary: [
            {summaryBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
        ]
    }
    return o;
}]);

resumeApp.factory('jobs', [function(){
    var o = {
        jobs: [
            {jobEmployer: "Export Abroad", jobLocation: "Madison, WI", jobTime: "2014 - Present", jobTitle: "Frontend Engineer", jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {jobEmployer: "U.S. Geological Survey", jobLocation: "Middleton, WI", jobTime: "2014 - Present", jobTitle: "Frontend UI/UX Designer", jobDescription: "Vivamus suscipit egestas odio vitae iaculis. Pellentesque in fringilla nunc. Duis aliquet ultrices ornare. In quis urna sit amet augue pretium vestibulum et congue arcu. Duis quis elit a tellus consectetur varius et vel justo."}
        ]
    }
    return o;
}]);

resumeApp.factory('projects', [function(){
    var o = {
        projects: [
            {projectTitle: "Volunteering with the United Way", projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {projectTitle: "Creation of ineedaresume", projectDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
        ]
    }
    return o;
}]);

resumeApp.factory('qualifications', [function(){
    var o = {
        qualifications: [
            {qualificationTitle: "Bachelor of Science in Computer Science", qualificationInstitution: "University of Wisconsin", qualificationLocation: "Madison, WI", qualificationCompletion: "2015"},
            {qualificationTitle: "Bachelor of Arts in Graphics", qualificationInstitution: "University of Minnesota", qualificationLocation: "Minneapolis, MN", qualificationCompletion: "2012"}
        ]
    }
    return o;
}]);



resumeApp.factory('skills', [function(){
    var o = {
        skills: [
            {skill: "HTML"},
            {skill: "CSS"},
            {skill: "Javascript"},
            {skill: "MEAN"},
            {skill: "LESS"},
            {skill: "Sketch"},
            {skill: "Adobe Suite"},
            {skill: "UI / UX"},
            {skill: "Responsive"}
        ]
    }
    return o;
}]);
