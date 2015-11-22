resumeApp.value('prompts', {answeredLocal: false});

resumeApp.value('basics', {});
resumeApp.value('summary', {});


resumeApp.factory('jobs', [function(){
    var o = {
        jobs: [
        ]
    }
    return o;
}]);

resumeApp.factory('projects', [function(){
    var o = {
        projects: [
        ]
    }
    return o;
}]);

resumeApp.factory('qualifications', [function(){
    var o = {
        qualifications: [
        ]
    }
    return o;
}]);



resumeApp.factory('skills', [function(){
    var o = {
        skills: [
        ]
    }
    return o;
}]);
