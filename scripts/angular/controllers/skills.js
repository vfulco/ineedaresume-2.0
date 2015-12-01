//
// Controller for skills entry
//
resumeApp.controller('skillsController', ['$scope', 'skills', function($scope, skills){
    $scope.skills = skills.skills;

    ga('send', 'pageview', '/skills');

    $(document).prop('title', "Skills | ineedaresume");

    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }


    $scope.saveSkill = function(){

        if(!$scope.skillInput){
            $("#save-skill").html('<i class="ion-close-round"></i> You left it empty :(');
            $("#save-skill").addClass("save-error");
            $('.required').each(function(i, obj) {
                if($(this).val() == ""){
                    $(this).addClass("required-error");
                }
            });
            setTimeout(function() {
                $("#save-skill").html('<i class="ion-checkmark-round"></i> Save to skills list');
                $("#save-skill").removeClass("save-error");
            }, 4000);
            return;
        }

        $scope.skills.push( {skill: $scope.skillInput} );
        $storage.localSkills = $scope.skills; // Save locally

        $storage.localSkills = $scope.skills;
        $scope.skillInput = "";
    };
    $scope.deleteSkill = function($index){
        $scope.skills.splice($index,1);
    }
}]);
