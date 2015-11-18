
// Controller for home page
// resumeApp.controller('mainController', function($scope) {
resumeApp.controller('mainController',
    ['$scope', '$localStorage', '$sessionStorage', 'basic', 'summary', 'jobs', 'projects', 'qualifications', 'skills',
    function($scope, $localStorage, $sessionStorage, basic, summary, jobs, projects, qualifications, skills){

    $storage = $localStorage;
    $sstorage = $sessionStorage;
    $scope.basic = basic.basic;
    $scope.summary = summary.summary;
    $scope.jobs = jobs.jobs;
    $scope.projects = projects.projects;
    $scope.qualifications = qualifications.qualifications;
    $scope.skills = skills.skills;

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
    };


    // Check if previous local storage exists
    if($sstorage.hasAnsweredLocal){$scope.hasAnsweredLocal = true;}
        else{$scope.hasAnsweredLocal = false;}

    if ($storage.localBasic && !$scope.hasAnsweredLocal) {
        $("#has-local-storage").slideDown(500);
    }else{
        $("#has-local-storage").slideUp(500);
    }

    $scope.loadLocal = function(){
        $("#has-local-storage").slideUp(500);
        $scope.personal.push($storage.localPersonal[0]);
        $scope.social.push($storage.localSocial[0]);
        $scope.summary.push($storage.localSummary[0]);
        $scope.jobs.push($storage.localJobs[0]);
        $scope.projects.push($storage.localProjects[0]);
        $scope.qualifications.push($storage.localQualifications[0]);
        $scope.skills.push($storage.localSkills[0]);
        $sstorage.hasAnsweredLocal = true;
    }
    $scope.ignoreLocal = function(){
        $("#has-local-storage").slideUp(500);
        $("#has-local-storage").addClass("hidden");
        $sstorage.hasAnsweredLocal = true;
    }


}]);
resumeApp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}]);
