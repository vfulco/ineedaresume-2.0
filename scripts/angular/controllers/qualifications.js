//
// Controller for qualifications entry
//
resumeApp.controller('qualificationsController', ['$scope', 'qualifications', function($scope, qualifications){
    $scope.qualifications = qualifications.qualifications;

    $(document).prop('title', "Qualifications | ineedaresume");

    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }
    
    $scope.saveQualification = function(){
        if(!$scope.qualificationTitleInput || !$scope.qualificationInstitutionInput){
            $("#save-qualifications").html('<i class="ion-close-round"></i> Missing required fields');
            $("#save-qualifications").addClass("save-error");
            $('.required').each(function(i, obj) {
                if($(this).val() == ""){
                    $(this).addClass("required-error");
                }
            });
            setTimeout(function() {
                $("#save-qualifications").html('<i class="ion-checkmark-round"></i> Save to qualifications list');
                $("#save-qualifications").removeClass("save-error");
            }, 4000);
            return;
        }

        $scope.qualifications.push( {qualificationTitle: $scope.qualificationTitleInput, qualificationInstitution: $scope.qualificationInstitutionInput, qualificationLocation: $scope.qualificationLocationInput, qualificationCompletion: $scope.qualificationCompletionInput, qualificationGpa: $scope.qualificationGpaInput } );
        $storage.localQualifications = $scope.qualifications; // Save locally

        $scope.qualificationTitleInput = "";
        $scope.qualificationInstitutionInput = "";
        $scope.qualificationLocationInput = "";
        $scope.qualificationCompletionInput = "";
        $scope.qualificationGpaInput = "";

        $("#save-qualification").html('<i class="ion-checkmark-round"></i> Saved to list');
        $("#save-qualification").addClass("save-success");
        $(".required").removeClass("required-error");
        setTimeout(function() {
            $("#save-qualification").html('<i class="ion-checkmark-round"></i> Save to qualifications list');
            $("#save-qualification").removeClass("save-success");
        }, 2000);
    };

    $scope.deleteQualification = function($index){
        $scope.qualifications.splice($index,1);
    }

    $scope.editQualification = function($index){
        $scope.qualificationTitleInput = $scope.qualifications[$index].qualificationTitle;
        $scope.qualificationInstitutionInput = $scope.qualifications[$index].qualificationInstitution;
        $scope.qualificationLocationInput = $scope.qualifications[$index].qualificationLocation;
        $scope.qualificationCompletionInput = $scope.qualifications[$index].qualificationCompletion;
        $scope.qualificationGpaInput = $scope.qualifications[$index].qualificationGpa;
        $scope.qualifications.splice($index,1);
    }

}]);
