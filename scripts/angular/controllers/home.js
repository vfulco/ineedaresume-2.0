
// Controller for home page
// resumeApp.controller('mainController', function($scope) {
resumeApp.controller('mainController',
    ['$scope', '$localStorage', '$sessionStorage', 'prompts', 'basics', 'cover', 'summary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, $localStorage, $sessionStorage, prompts, basics, cover, summary, jobs, projects, qualifications, skills){

    $storage = $localStorage;
    $sstorage = $sessionStorage;
    $scope.prompts = prompts;
    $scope.cover = cover;
    $scope.basics = basics;
    $scope.summary = summary;
    $scope.jobs = jobs.jobs;
    $scope.projects = projects.projects;
    $scope.qualifications = qualifications.qualifications;
    $scope.skills = skills.skills;

    // Load local (name only) if it exists to welcome them back
    if($storage.localBasics && $storage.localBasics.name){$scope.welcomeName = $storage.localBasics.name;}
    else{$scope.welcomeName = "";}

    $scope.dismissPH = function(){
        $("#producthunt").remove();
    }

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
    };

    // Check if previous local storage exists
    if(!prompts.answeredLocal){
        if ($storage.localBasics || $storage.localCover || $storage.localSummary || $storage.localJobs || $storage.localProjects || $storage.localQualifications || $storage.localSkills) {
            $("#has-local-storage").show(0);
        }
    }else{
        $("#has-local-storage").hide(0);
    }


    $scope.loadLocal = function(){
        $("#has-local-storage").slideUp(500);
        // Load Basic
        if($storage.localBasics.name){basics.name = $storage.localBasics.name;}
        if($storage.localBasics.email){basics.email = $storage.localBasics.email;}
        if($storage.localBasics.phone){basics.phone = $storage.localBasics.phone;}
        if($storage.localBasics.linkedin){basics.linkedin = $storage.localBasics.linkedin;}
        if($storage.localBasics.twitter){basics.twitter = $storage.localBasics.twitter;}
        if($storage.localBasics.skype){basics.skype = $storage.localBasics.skype;}
        if($storage.localBasics.link){basics.link = $storage.localBasics.link;}
        // Load Cover
        if($storage.localCover.body){cover.body = $storage.localCover.body;}
        // Load Summary
        if($storage.localSummary.body){summary.body = $storage.localSummary.body;}
        // Load Everything Else
        if($storage.localJobs[0]){$scope.jobs.push($storage.localJobs[0]);}
        if($storage.localProjects[0]){$scope.projects.push($storage.localProjects[0]);}
        if($storage.localQualifications[0]){$scope.qualifications.push($storage.localQualifications[0]);}
        if($storage.localSkills[0]){$scope.skills.push($storage.localSkills[0]);}
        prompts.answeredLocal = true;
    }
    $scope.ignoreLocal = function(){
        $("#has-local-storage").slideUp(500);
        $("#has-local-storage").addClass("hidden");
        prompts.answeredLocal = true;
    }

    $scope.clearLocal = function(){
        $storage.$reset();
        alert("Your data has been erased from your computer.")
    }


}]);
resumeApp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}]);
