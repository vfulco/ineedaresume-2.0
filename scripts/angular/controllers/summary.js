//
// Controller for summary entry
//
resumeApp.controller('summaryController', ['$scope', 'toastr', 'summary', function($scope, toastr, summary){
    $scope.summary = summary.summary;
    $scope.saveSummary = function(){
        $scope.summary.splice(0,1);
        $scope.summary.push( {summaryBody: $scope.summaryBodyInput} );
    };

    $scope.isMakingChanges = false;
    $scope.makingChanges = function(){
        if($scope.isMakingChanges){
            $("#save-summary").html('<i class="ion-checkmark-round"></i> Save Changes');
            $("#save-summary").removeClass("save-success");
        }
        else{
            return;
        }
    }
    $scope.saveSummaryAlert = function(){
        $("#save-summary").html('<i class="ion-checkmark-round"></i> Saved');
        $("#save-summary").addClass("save-success");
    };
    $scope.initSummary = function(){
        $scope.summaryBodyInput = $scope.summary[0].summaryBody;
        if($scope.summaryBodyInput){
            $("#save-summary").html('<i class="ion-checkmark-round"></i> Saved');
            $("#save-summary").addClass("save-success");
            $scope.isMakingChanges = true;
        }
    };

}]);
