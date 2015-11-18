//
// Controller for skills entry
//
resumeApp.controller('skillsController', ['$scope', 'toastr', 'skills', function($scope, toastr, skills){
    $scope.skills = skills.skills;

    $("form input:first").focus();

    $(document).prop('title', "Skills | ineedaresume");


    $scope.saveSkill = function(){
        if(!$scope.skillInput){
            toastr.error("You have to enter a skill first :(", {
                timeOut: 800
            });
            return;
        }
        $scope.skills.push( {skill: $scope.skillInput} );
        $storage.localSkills = $scope.skills;
        $scope.skillInput = "";
    };
    $scope.deleteSkill = function($index){
        $scope.skills.splice($index,1);
    }
}]);
