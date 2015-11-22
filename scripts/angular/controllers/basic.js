//
// Controller for basic info data entry
//
resumeApp.controller('basicController', ['$scope', 'basics', function($scope, basics){

    $scope.basics = basics;

    $(document).prop('title', "Basic Info | ineedaresume");

    // Hide alert if they dont have an adblocker
    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }



    $scope.isMakingChanges = false;
    $scope.makingChanges = function(){
        if($scope.isMakingChanges){
            $("#save-basic").html('<i class="ion-checkmark-round"></i> Save Changes');
            $("#save-basic").removeClass("save-success");
        }else{
            return;
        }
    }

    $scope.basicInit = function(){
        if(basics.name || basics.email || basics.linkedin || basics.twitter || basics.skype || basics.link){
            $("#save-basic").html('<i class="ion-checkmark-round"></i> Saved');
            $("#save-basic").addClass("save-success");
            $scope.isMakingChanges = true;
        }
    }

    $scope.saveBasicAlert = function(){
       $("#save-basic").html('<i class="ion-checkmark-round"></i> Saved');
       $("#save-basic").addClass("save-success");
       $scope.isMakingChanges = true;
       $storage.localBasics = $scope.basics;
   };

}]);
