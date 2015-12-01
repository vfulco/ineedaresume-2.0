//
// Controller for summary entry
//
resumeApp.controller('summaryController', ['$scope', 'summary', function($scope, summary){

    $scope.summary = summary;

    ga('send', 'pageview', '/summary');

    $(document).prop('title', "Summary | ineedaresume");

    if( window.canRunAds === undefined ){
        $(".advertisement").slideUp();
    }


    // $scope.bold = function(){wrapText("summaryRichText", "<b>", "</b>");}
    // $scope.italic = function(){wrapText("summaryRichText", "<i>", "</i>");}
    // $scope.underline = function(){wrapText("summaryRichText", "<u>", "</u>");}
    // $scope.bullet = function(){wrapText("summaryRichText", "*", "");}

    // $scope.saveSummary = function(){
    //     // $scope.summaryBodyInput = $("#summaryRichText").val();
    //     $scope.summary.splice(0,1);
    //     $scope.summary.push( {summaryBody: $scope.summaryBodyInput} );
    // };

    $scope.isMakingChanges = false;
    $scope.makingChanges = function(){
        if($scope.isMakingChanges){
            $("#save-summary").html('<i class="ion-checkmark-round"></i> Save Changes');
            $("#save-summary").removeClass("save-success");
        }else{
            return;
        }
    }

    $scope.summaryInit = function(){
        if(summary.body){
            $("#save-summary").html('<i class="ion-checkmark-round"></i> Saved');
            $("#save-summary").addClass("save-success");
            $scope.isMakingChanges = true;
        }
    }

    $scope.saveSummaryAlert = function(){
       $("#save-summary").html('<i class="ion-checkmark-round"></i> Saved');
       $("#save-summary").addClass("save-success");
       $scope.isMakingChanges = true;
       $storage.localSummary = $scope.summary;
   };

}]);
