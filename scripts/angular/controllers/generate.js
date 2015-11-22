// Controller for resume generation
resumeApp.controller('generateController',
    ['$scope', '$localStorage', '$sessionStorage', 'basics', 'summary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, $localStorage, $sessionStorage, basics, summary, jobs, projects, qualifications, skills){


        $storage = $localStorage;
        $scope.basics = basics;
        $scope.summary = summary;
        $scope.jobs = jobs.jobs;
        $scope.projects = projects.projects;
        $scope.qualifications = qualifications.qualifications;
        $scope.skills = skills.skills;

        $(document).prop('title', "Create a resume | ineedaresume");

        // Text area formatting
        // if($scope.summary[0]){
        //     $scope.summaryFormatted = $scope.summary[0].summaryBody.replace(/\*/g,"&#8226;");
        // }else{
        //     $scope.summaryFormatted = "";
        // }
        // $scope.addBullets = function(entry) {
        //   return entry.replace(/\*/g,"&#8226;");
        // }



        // Edit and modal controls
        $scope.closeModal = function(){
            $scope.lightbox = false;
            $scope.modal = false;
            $scope.editingSummaryHeader = false;
            $scope.editingJobsHeader = false;
            $scope.editingProjectsHeader = false;
            $scope.editingQualificationsHeader = false;
            $scope.editingSkillsHeader = false;
            $scope.editingBasicHeader = false;
        };

        $scope.displayModal = function(){
            $scope.lightbox = true;
            $scope.modal = true;
        };

        // Resume Header editing
        $scope.basicHeader = 'Contact';
        $scope.editBasicHeader = function(){
            $scope.editingBasicHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing basic info header";
            $scope.modalButton = "Save / Close";
        };
        $scope.summaryTitle = 'Professional Summary';
        $scope.editSummaryTitle = function(){
            $scope.editingSummaryHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing summary header";
            $scope.modalButton = "Save / Close";
        };
        $scope.jobsHeader = 'Experience';
        $scope.editJobsHeader = function(){
            $scope.editingJobsHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing experience header";
            $scope.modalButton = "Save / Close";
        };
        $scope.projectsHeader = 'Projects';
        $scope.editProjectsHeader = function(){
            $scope.editingProjectsHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing projects header";
            $scope.modalButton = "Save / Close";
        };
        $scope.qualificationsHeader = 'Education';
        $scope.editQualificationsHeader = function(){
            $scope.editingQualificationsHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing qualifications header";
            $scope.modalButton = "Save / Close";
        };
        $scope.skillsHeader = 'Skills';
        $scope.editSkillsHeader = function(){
            $scope.editingSkillsHeader = true;
            $scope.displayModal();
            $scope.modalHeader = "editing skills header";
            $scope.modalButton = "Save / Close";
        };



        // Theme control
        $scope.themeClass = "theme-pacifico";
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
         $scope.fontSize = 9;
          $scope.adjustFontSize = function() {
              $(".adjust-lineheight").css("font-size", $scope.fontSize + "pt");
          };
        // Show/hide icons
        $scope.showIcons = true;
        $scope.showHideIcons = function() {
        };





        // Instructions Dialog
        $scope.showInstructions = function(){
            $scope.lightbox = true;
            $scope.instructions = true;
            $scope.instructionsText = true;
            $scope.instructionsVideos = false;
        }
        $scope.closeInstructions = function(){
            $scope.instructionsText = true;
            $scope.instructionsVideos = false;
            $scope.lightbox = false;
            $scope.instructions = false;
        }

        $scope.instructionsText = true;
        $scope.instructionsVideos = false;
        $scope.showVideos = function(){
            $scope.instructionsText = false;
            $scope.instructionsVideos = true;
        }

        $scope.src = "assets/chrome.mp4";
        $scope.chromeVideo = function(){
            $scope.src = "assets/chrome.mp4";
            $(".browser").removeClass("active");
            $("#chrome").addClass("active");
        }
        $scope.firefoxVideo = function(){
            $scope.src = "assets/firefox.mp4";
            $(".browser").removeClass("active");
            $("#firefox").addClass("active");
        }
        $scope.safariVideo = function(){
            $scope.src = "assets/safari.mp4";
            $(".browser").removeClass("active");
            $("#safari").addClass("active");
        }
        $scope.returnToInstructions = function(){
            $scope.instructionsText = true;
            $scope.instructionsVideos = false;
        }


        // Actual Printing
        $scope.printResume = function(){
            ga('send', 'event', 'Button', 'Click', 'DownloadPDF');
            $(document).prop('title', "Your Resume");
            print();
            $scope.closeInstructions();
            $(document).prop('title', "Create a resume | ineedaresume");
        }






}]);
