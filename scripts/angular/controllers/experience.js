//
// Controller for experience/jobs entry
//
resumeApp.controller('experienceController', ['$scope', 'toastr', 'jobs', function($scope, toastr, jobs){
    $scope.jobs = jobs.jobs;

    $("form input:first").focus();

    $(document).prop('title', "Experiences | ineedaresume");

    $scope.saveJob = function(){
        // If employer or title empty
        if(!$scope.jobEmployerInput || !$scope.jobTitleInput){
            $("#save-job").html('<i class="ion-close-round"></i> Missing required fields');
            $("#save-job").addClass("save-error");
            $('.required').each(function(i, obj) {
                if($(this).val() == ""){
                    $(this).addClass("required-error");
                }
            });
            setTimeout(function() {
                $("#save-job").html('<i class="ion-checkmark-round"></i> Save to experiences list');
                $("#save-job").removeClass("save-error");
            }, 4000);
            return;
        }
        // Otherwise push
        $scope.jobs.push( {jobEmployer: $scope.jobEmployerInput, jobLocation: $scope.jobLocationInput, jobTime: $scope.jobTimeInput, jobTitle: $scope.jobTitleInput, jobDescription: $scope.jobDescriptionInput} );

        $("#save-job").html('<i class="ion-checkmark-round"></i> Saved to list');
        $("#save-job").addClass("save-success");
        $(".required").removeClass("required-error");
        setTimeout(function() {
            $("#save-job").html('<i class="ion-checkmark-round"></i> Save to experiences list');
            $("#save-job").removeClass("save-success");
        }, 2000);

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
