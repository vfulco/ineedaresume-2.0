
// Controller for home page
// resumeApp.controller('mainController', function($scope) {
resumeApp.controller('mainController',
    ['$scope', '$localStorage', '$sessionStorage', 'personal', 'social', 'summary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, $localStorage, $sessionStorage, personal, social, summary, jobs, projects, qualifications, skills){

    $storage = $localStorage;
    $sstorage = $sessionStorage;
    $scope.personal = personal.personal;
    $scope.social = social.social;
    $scope.summary = summary.summary;
    $scope.jobs = jobs.jobs;
    $scope.projects = projects.projects;
    $scope.qualifications = qualifications.qualifications;
    $scope.skills = skills.skills;

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
    };



    // Check if previous local storage exists
    $scope.hasAnsweredLocal = false;
    $scope.welcomeName = $storage.localPersonal[0].name;
    if (!$storage.localPersonal | $sstorage.hasAnsweredLocal) {
        $("#has-local-storage").slideUp(500);
    }else{
        $("#has-local-storage").slideDown(500);
    }

    $scope.loadLocal = function(){
        $("#has-local-storage").slideUp(500);
        $scope.personal.push($storage.localPersonal[0]);
        $scope.social.push($storage.localSocial[0]);
        $scope.summary.push($storage.localSummary[0]);
        $scope.jobs.push($storage.localJobs[0]);
        $scope.projects.push($storage.localProjects[0]);
        $scope.qualifications.push($storage.localQualifications[0]);
        $scope.skills.push($storage.localSkills[0]);
        $sstorage.hasAnsweredLocal = true;
    }
    $scope.ignoreLocal = function(){
        $("#has-local-storage").slideUp(500);
        $("#has-local-storage").addClass("hidden");
        $sstorage.hasAnsweredLocal = true;
    }


}]);
resumeApp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}]);



// Controller for personal info data entry
resumeApp.controller('personalController', ['$scope', 'toastr', 'personal', function($scope, toastr, personal){

    $scope.personal = personal.personal;

    $scope.savePersonal = function(){
        if(!$scope.nameInput && !$scope.emailInput && !$scope.phoneInput){
            return;
        }
        $scope.personal.splice(0,1);
        $scope.personal.push( {name: $scope.nameInput, email: $scope.emailInput, phone: $scope.phoneInput} );
    };
    $scope.savePersonalAlert = function(){
        if(!$scope.nameInput && !$scope.emailInput && !$scope.phoneInput){
            toastr.error("You can't leave it all empty :(", {
                timeOut: 800
            });
            return;
        }
        toastr.success("Personal Info Saved :)", {
            timeOut: 1500
        });
    };
    $scope.editPersonal = function(){
        $scope.fillPersonal();
        $scope.personal.splice(0,1);
    };
    $scope.fillPersonal = function(){
        $scope.nameInput = $scope.personal[0].name;
        $scope.emailInput = $scope.personal[0].email;
        $scope.phoneInput = $scope.personal[0].phone;
    };

}]);





// Controller for social entry
resumeApp.controller('socialController', ['$scope', 'toastr', 'social', function($scope, toastr, social){
    $scope.social = social.social;

    $scope.saveSocial = function(){
        $scope.social.splice(0,1);
        $scope.social.push( {linkedin: $scope.linkedinInput, twitter: $scope.twitterInput, skype: $scope.skypeInput, github: $scope.githubInput, dribbble: $scope.dribbbleInput, link: $scope.linkInput} );
    };
    $scope.saveSocialAlert = function(){
        toastr.success("Social links saved :)", {
            timeOut: 1500
        });
    };
    $scope.editSocial = function(){
        $scope.fillPersonal();
        $scope.personal.splice(0,1);
    };
    $scope.fillSocial = function(){
        $scope.linkedinInput = $scope.social[0].linkedin;
        $scope.twitterInput = $scope.social[0].twitter;
        $scope.skypeInput = $scope.social[0].skype;
        $scope.githubInput = $scope.social[0].github;
        $scope.dribbbleInput = $scope.social[0].dribbble;
        $scope.linkInput = $scope.social[0].link;
    };

}]);




// Controller for summary entry
resumeApp.controller('summaryController', ['$scope', 'toastr', 'summary', function($scope, toastr, summary){
    $scope.summary = summary.summary;
    $scope.saveSummary = function(){
        $scope.summary.splice(0,1);
        $scope.summary.push( {summaryBody: $scope.summaryBodyInput} );
    };

    $scope.saveSummaryAlert = function(){
        if(!$scope.summaryBodyInput){
            toastr.success("Summary Erased :(", {
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
        $scope.summary.splice(0,1);
    };
    $scope.fillSummary = function(){
        $scope.summaryBodyInput = $scope.summary[0].summaryBody;
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
