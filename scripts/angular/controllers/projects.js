//
// Controller for projects entry
//
resumeApp.controller('projectsController', ['$scope', 'projects', function($scope, projects){
    $scope.projects = projects.projects;

    ga('send', 'pageview', '/projects');

    $(document).prop('title', "Projects | ineedaresume");

    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }

    $scope.saveProject = function(){
        if(!$scope.projectTitleInput || !$scope.projectDescriptionInput){
            $("#save-project").html('<i class="ion-close-round"></i> All fields are required');
            $("#save-project").addClass("save-error");
            $('.required').each(function(i, obj) {
                if($(this).val() == ""){
                    $(this).addClass("required-error");
                }
            });
            setTimeout(function() {
                $("#save-project").html('<i class="ion-checkmark-round"></i> Save to projects list');
                $("#save-project").removeClass("save-error");
            }, 4000);
            return;
        }
        $scope.projects.push( {projectTitle: $scope.projectTitleInput, projectDescription: $scope.projectDescriptionInput} );
        $storage.localProjects = $scope.projects; // Save locally

        $("#save-project").html('<i class="ion-checkmark-round"></i> Saved to list');
        $("#save-project").addClass("save-success");
        $(".required").removeClass("required-error");
        setTimeout(function() {
            $("#save-project").html('<i class="ion-checkmark-round"></i> Save to projects list');
            $("#save-project").removeClass("save-success");
        }, 2000);

        $scope.projectTitleInput = "";
        $scope.projectDescriptionInput = "";
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
