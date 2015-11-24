//
// Controller for cover letter entry
//
resumeApp.controller('coverController', ['$scope', 'cover', function($scope, cover){

    $scope.cover = cover;

    $(document).prop('title', "Cover Letter | ineedaresume");

    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }


    $scope.isMakingChanges = false;
    $scope.makingChanges = function(){
        if($scope.isMakingChanges){
            $("#save-cover").html('<i class="ion-checkmark-round"></i> Save Changes');
            $("#save-cover").removeClass("save-success");
        }else{
            return;
        }
    }

    $scope.coverInit = function(){
        if(cover.body){
            $("#save-cover").html('<i class="ion-checkmark-round"></i> Saved');
            $("#save-cover").addClass("save-success");
            $scope.isMakingChanges = true;
        }
    }

    $scope.saveCoverAlert = function(){
       $("#save-cover").html('<i class="ion-checkmark-round"></i> Saved');
       $("#save-cover").addClass("save-success");
       $scope.isMakingChanges = true;
       $storage.localCover = $scope.cover;
   };

}]);
