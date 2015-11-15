// Controller for resume generation
resumeApp.controller('generateController',
    ['$scope', '$localStorage', '$sessionStorage', 'toastr', 'personal', 'social', 'summary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, $localStorage, $sessionStorage, toastr, personal, social, summary, jobs, projects, qualifications, skills){

        $storage = $localStorage;
        $scope.personal = personal.personal;
        $scope.social = social.social;
        $scope.summary = summary.summary;
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
            $scope.editingPersonalHeader = false;
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
        $scope.jobsHeader = 'Experience';
        $scope.editJobsHeader = function(){
            $scope.editingJobsHeader = true;
            $scope.displayModal();
        };
        $scope.projectsHeader = 'Projects';
        $scope.editProjectsHeader = function(){
            $scope.editingProjectsHeader = true;
            $scope.displayModal();
        };
        $scope.qualificationsHeader = 'Education';
        $scope.editQualificationsHeader = function(){
            $scope.editingQualificationsHeader = true;
            $scope.displayModal();
        };
        $scope.skillsHeader = 'Skills';
        $scope.editSkillsHeader = function(){
            $scope.editingSkillsHeader = true;
            $scope.displayModal();
        };
        $scope.personalHeader = 'Contact';
        $scope.editPersonalHeader = function(){
            $scope.editingPersonalHeader = true;
            $scope.displayModal();
        };
        $scope.skillsHeader = 'Skills';
        $scope.editSkillsHeader = function(){
            $scope.editingSkillsHeader = true;
            $scope.displayModal();
        };



        // Theme control
        $scope.themeClass = "theme-raleway";
        $scope.setThemeSource = function(){
            $scope.themeClass = "theme-source";
            $scope.showIcons = true;
            $scope.lineHeight = 1.5;
        };
        $scope.setThemePacifico = function(){
            $scope.themeClass = "theme-pacifico";
            $scope.showIcons = true;
            $scope.lineHeight = 1.5;
        };
        $scope.setThemeRaleway = function(){
            $scope.themeClass = "theme-raleway";
            $scope.showIcons = true;
            $scope.lineHeight = 1.2;
        }


        // Activate Theme Link to show it's selected
        $scope.activeTheme = function (event){
           $(".theme").removeClass('active');
           $(event.target).addClass('active');
        }



        // Fine Tune control
        // Adjust Line Height
        $scope.lineHeight = 1.5;
         $scope.adjustLineHeight = function() {
             $(".adjust-lineheight").css("line-height", $scope.lineHeight);
         };
        // Show/hide icons
        $scope.showIcons = true;
        $scope.showHideIcons = function() {

        };

        // Print control
        $scope.savePDF = function(){
            print();
        };




        // Local Storage
        $scope.saveLocally = function(){
            $storage.localPersonal = $scope.personal;
            $storage.localSocial = $scope.social;
            $storage.localSummary = $scope.summary;
            $storage.localJobs = $scope.jobs;
            $storage.localProjects = $scope.projects;
            $storage.localQualifications = $scope.qualifications;
            $storage.localSkills = $scope.skills;
        }








}]);
