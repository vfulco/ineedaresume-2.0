//
// Controller for basic info data entry
//
resumeApp.controller('basicController', ['$scope', 'toastr', 'basic', function($scope, toastr, basic){

    $scope.basic = basic.basic;

    $("form input:first").focus();

    $(document).prop('title', "Basic Info | ineedaresume");

    $scope.saveBasic = function(){
        $scope.basic.splice(0,1);
        $scope.basic.push( {name: $scope.nameInput, email: $scope.emailInput, phone: $scope.phoneInput, linkedin: $scope.linkedinInput, twitter: $scope.twitterInput, skype: $scope.skypeInput, link: $scope.linkInput } );
    };

    $scope.isMakingChanges = false;
    $scope.makingChanges = function(){
        if($scope.isMakingChanges){
            $("#save-basic").html('<i class="ion-checkmark-round"></i> Save Changes');
            $("#save-basic").removeClass("save-success");
        }else{
            return;
        }
    }

    $scope.saveBasicAlert = function(){
        $("#save-basic").html('<i class="ion-checkmark-round"></i> Saved');
        $("#save-basic").addClass("save-success");
    };
    $scope.initBasic = function(){
        $scope.nameInput = $scope.basic[0].name;
        $scope.emailInput = $scope.basic[0].email;
        $scope.phoneInput = $scope.basic[0].phone;
        $scope.linkedinInput = $scope.basic[0].linkedin;
        $scope.twitterInput = $scope.basic[0].twitter;
        $scope.skypeInput = $scope.basic[0].skype;
        $scope.linkInput = $scope.basic[0].link;
        if($scope.nameInput || $scope.emailInput || $scope.linkedinInput || $scope.twitterInput || $scope.skypeInput || $scope.linkInput){
            $("#save-basic").html('<i class="ion-checkmark-round"></i> Saved');
            $("#save-basic").addClass("save-success");
            $scope.isMakingChanges = true;
        }
    };

}]);




//
// Controller for social entry
//
resumeApp.controller('socialController', ['$scope', 'toastr', 'social', function($scope, toastr, social){
    $scope.social = social.social;

    $scope.saveSocial = function(){
        $scope.social.splice(0,1);
        $scope.social.push( {linkedin: $scope.linkedinInput, twitter: $scope.twitterInput, skype: $scope.skypeInput, github: $scope.githubInput, dribbble: $scope.dribbbleInput, link: $scope.linkInput} );
    };
    $scope.saveSocialAlert = function(){
        toastr.success("Social links saved :)", {
            timeOut: 1500
        });
    };
    $scope.editSocial = function(){
        $scope.fillPersonal();
        $scope.basic.splice(0,1);
    };
    $scope.fillSocial = function(){
        $scope.linkedinInput = $scope.social[0].linkedin;
        $scope.twitterInput = $scope.social[0].twitter;
        $scope.skypeInput = $scope.social[0].skype;
        $scope.githubInput = $scope.social[0].github;
        $scope.dribbbleInput = $scope.social[0].dribbble;
        $scope.linkInput = $scope.social[0].link;
    };

}]);
