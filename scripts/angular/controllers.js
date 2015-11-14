
// Controller for home page
// resumeApp.controller('mainController', function($scope) {
resumeApp.controller('mainController', ['$scope', function($scope){

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
    };

}]);
resumeApp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}]);



// Controller for personal info data entry
// resumeApp.controller('personalinfoController', function($scope) {
resumeApp.controller('personalInfoController', ['$scope', 'toastr', 'personalInfo', function($scope, toastr, personalInfo){

    $scope.personalInfo = personalInfo.personalInfo;

    $scope.saveSuccess = "Save";
    $scope.saveUserInfo = function(){
        if(!$scope.userNameInput && !$scope.userEmailInput && !$scope.userPhoneInput && !$scope.userLocationInput && !$scope.userLinkInput){
            return;
        }
        $scope.personalInfo.splice(0,1);
        $scope.personalInfo.push( {userName: $scope.userNameInput, userEmail: $scope.userEmailInput, userPhone: $scope.userPhoneInput, userLocation: $scope.userLocationInput, userLink: $scope.userLinkInput} );
    };
    $scope.saveUserInfoAlert = function(){
        if(!$scope.userNameInput && !$scope.userEmailInput && !$scope.userPhoneInput && !$scope.userLocationInput && !$scope.userLinkInput){
            toastr.error("You can't leave it all empty :(", {
                timeOut: 800
            });
            return;
        }
        toastr.success("Personal Info Saved :)", {
            timeOut: 1500
        });
    };
    $scope.editUserInfo = function(){
        $scope.fillUserInfo();
        $scope.personalInfo.splice(0,1);
    };
    $scope.fillUserInfo = function(){
        $scope.userNameInput = $scope.personalInfo[0].userName;
        $scope.userLocationInput = $scope.personalInfo[0].userLocation;
        $scope.userEmailInput = $scope.personalInfo[0].userEmail;
        $scope.userPhoneInput = $scope.personalInfo[0].userPhone;
        $scope.userLinkInput = $scope.personalInfo[0].userLink;
    };

}]);


// Controller for summary entry
resumeApp.controller('summaryController', ['$scope', 'toastr', 'theSummary', function($scope, toastr, theSummary){
    $scope.theSummary = theSummary.theSummary;
    $scope.saveSummary = function(){
        if(!$scope.summaryBodyInput){
            return;
        }
        $scope.theSummary.splice(0,1);
        $scope.theSummary.push( {summaryBody: $scope.summaryBodyInput} );
    };

    $scope.saveSummaryAlert = function(){
        if(!$scope.summaryBodyInput){
            toastr.error("You can't save what's not there :(", {
                timeOut: 2200
            });
            return;
        }
        toastr.success("Summary Saved :)", {
            timeOut: 2200
        });
    };

    $scope.editSummary = function(){
        $scope.fillSummary();
        $scope.theSummary.splice(0,1);
    };
    $scope.fillSummary = function(){
        $scope.summaryBodyInput = $scope.theSummary[0].summaryBody;
    };

}]);


// Controller for jobs entry
resumeApp.controller('jobsController', ['$scope', 'toastr', 'jobs', function($scope, toastr, jobs){
    $scope.jobs = jobs.jobs;
    $scope.saveJob = function(){
        if(!$scope.jobEmployerInput && !$scope.jobLocationInput && !$scope.jobTimeInput && !$scope.jobTitleInput && !$scope.jobDescriptionInput){
            toastr.error("Come on, at least fill one thing out :(", {
                timeOut: 800
            });
            return;
        }
      $scope.jobs.push( {jobEmployer: $scope.jobEmployerInput, jobLocation: $scope.jobLocationInput, jobTime: $scope.jobTimeInput, jobTitle: $scope.jobTitleInput, jobDescription: $scope.jobDescriptionInput} );
      toastr.success("Job added to resume :)", {
          timeOut: 2200
      });
      $scope.jobEmployerInput = "";
      $scope.jobLocationInput = "";
      $scope.jobTimeInput = "";
      $scope.jobTitleInput = "";
      $scope.jobDescriptionInput = "";

      $scope.hasWork = true;
    };

    $scope.deleteJob = function($index){
        $scope.jobs.splice($index,1);
    }

    $scope.editJob = function($index){
        $scope.jobEmployerInput = $scope.jobs[$index].jobEmployer;
        $scope.jobLocationInput = $scope.jobs[$index].jobLocation;
        $scope.jobTimeInput = $scope.jobs[$index].jobTime;
        $scope.jobTitleInput = $scope.jobs[$index].jobTitle;
        $scope.jobDescriptionInput = $scope.jobs[$index].jobDescription;
        $scope.jobs.splice($index,1);
    }

}]);


// Controller for projects entry
resumeApp.controller('projectsController', ['$scope', 'toastr', 'projects', function($scope, toastr, projects){
    $scope.projects = projects.projects;
    $scope.saveProject = function(){
        if(!$scope.projectTitleInput && !$scope.projectDescriptionInput){
            toastr.error("You left it all blank :(", {
                timeOut: 2200
            });
            return;
        }
        $scope.projects.push( {projectTitle: $scope.projectTitleInput, projectDescription: $scope.projectDescriptionInput} );
        $scope.projectTitleInput = "";
        $scope.projectDescriptionInput = "";
        toastr.success("Project added to resume :)", {
            timeOut: 2200
        });
    };

    $scope.deleteProject = function($index){
        $scope.projects.splice($index,1);
    }

    $scope.editProject = function($index){
        $scope.projectTitleInput = $scope.projects[$index].projectTitle;
        $scope.projectDescriptionInput = $scope.projects[$index].projectDescription;
        $scope.projects.splice($index,1);
    }


}]);



// Controller for qualifications entry
resumeApp.controller('qualificationsController', ['$scope', 'toastr', 'qualifications', function($scope, toastr, qualifications){
    $scope.qualifications = qualifications.qualifications;

    $scope.saveQualification = function(){
        if(!$scope.qualificationTitleInput && !$scope.qualificationInstitutionInput && !$scope.qualificationLocationInput && !$scope.qualificationCompletionInput){
            toastr.error("You didn't enter anyting :(", {
                timeOut: 2200
            });
            return;
        }
      $scope.qualifications.push( {qualificationTitle: $scope.qualificationTitleInput, qualificationInstitution: $scope.qualificationInstitutionInput, qualificationLocation: $scope.qualificationLocationInput, qualificationCompletion: $scope.qualificationCompletionInput } );
      $scope.qualificationTitleInput = "";
      $scope.qualificationInstitutionInput = "";
      $scope.qualificationLocationInput = "";
      $scope.qualificationCompletionInput = "";
      toastr.success("Qualification added to resume :)", {
          timeOut: 2200
      });
    };
    $scope.deleteQualification = function($index){
        $scope.qualifications.splice($index,1);
    }

    $scope.editQualification = function($index){
        $scope.qualificationTitleInput = $scope.qualifications[$index].qualificationTitle;
        $scope.qualificationInstitutionInput = $scope.qualifications[$index].qualificationInstitution;
        $scope.qualificationLocationInput = $scope.qualifications[$index].qualificationLocation;
        $scope.qualificationCompletionInput = $scope.qualifications[$index].qualificationCompletion;
        $scope.qualifications.splice($index,1);
    }

}]);


// Controller for skills entry
resumeApp.controller('skillsController', ['$scope', 'toastr', 'skills', function($scope, toastr, skills){
    $scope.skills = skills.skills;
    $scope.saveSkill = function(){
        if(!$scope.skillInput){
            toastr.error("You have to enter a skill first :(", {
                timeOut: 800
            });
            return;
        }
        $scope.skills.push( {skill: $scope.skillInput} );
        $scope.skillInput = "";
    };
    $scope.deleteSkill = function($index){
        $scope.skills.splice($index,1);
    }
}]);




// Controller for resume generation
resumeApp.controller('generateController',
    ['$scope', 'toastr', 'personalInfo', 'theSummary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, toastr, personalInfo, theSummary, jobs, projects, qualifications, skills){

        $scope.personalInfo = personalInfo.personalInfo;
        $scope.theSummary = theSummary.theSummary;
        $scope.jobs = jobs.jobs;
        $scope.projects = projects.projects;
        $scope.qualifications = qualifications.qualifications;
        $scope.skills = skills.skills;




        // Edit and modal controls
        $scope.closeModal = function(){
            $scope.lightbox = false;
            $scope.modal = false;
            $scope.editingSummaryHeader = false;
            $scope.editingJobsHeader = false;
            $scope.editingProjectsHeader = false;
            $scope.editingQualificationsHeader = false;
            $scope.editingSkillsHeader = false;
        };

        $scope.displayModal = function(){
            $scope.lightbox = true;
            $scope.modal = true;
        };

        // Resume Header editing
        $scope.summaryTitle = 'Professional Summary';
        $scope.editSummaryTitle = function(){
            $scope.editingSummaryHeader = true;
            $scope.displayModal();
        };
        $scope.jobsHeader = 'Work Experience';
        $scope.editJobsHeader = function(){
            $scope.editingJobsHeader = true;
            $scope.displayModal();
        };
        $scope.projectsHeader = 'Projects';
        $scope.editProjectsHeader = function(){
            $scope.editingProjectsHeader = true;
            $scope.displayModal();
        };
        $scope.qualificationsHeader = 'Qualifications';
        $scope.editQualificationsHeader = function(){
            $scope.editingQualificationsHeader = true;
            $scope.displayModal();
        };
        $scope.skillsHeader = 'Skills';
        $scope.editSkillsHeader = function(){
            $scope.editingSkillsHeader = true;
            $scope.displayModal();
        };



        // Theme control
        $scope.themeClass = "theme-cursive";
        $scope.setThemeBasic = function(){
            $scope.themeClass = "theme-basic";
        };
        $scope.setThemeCursive = function(){
            $scope.themeClass = "theme-cursive";
        };








}]);


resumeApp.factory('personalInfo', [function(){
    var o = {
        personalInfo: [
            {userName: "Mitch Samuels", userEmail: "samuels.mitch@gmail.com", userPhone: "5073305897", userLocation: "Madison, WI", userLink:"http://mitchs.co"}
        ]
    }
    return o;
}]);

resumeApp.factory('theSummary', [function(){
    var o = {
        theSummary: [
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
