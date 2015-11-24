resumeApp.value('prompts', {answeredLocal: false});

resumeApp.value('basics', {name: "Mitch Samuels", email: "samuels.mitch@gmail.com", phone: "7065764824", linkedin: "linkedin.com/in/mitchas", twitter: "@sleumasm", skype: "mitch-samuels", link: "mitchs.co"});
resumeApp.value('cover', {body: "To\nMitch Samuels\nineedaresu.me design\n777 University Ave #1226\nMadison, WI 53715\n\nRe: Application for frontend engineer\n\nDear Mr. Samuels\n\nI was excited to see that your position for a web designer was still open.\nMy background includes a ton of work with websites ranging from federal government agencies to local startups, and I have even made a website for a Grammy Winning artist. Seriously, I have worked with everything.\n\nIn addition to my experience, I have gained considerable customer service skills while working at my University's Dining Hall two years ago.\n\nI also bring to the table strong proficiencies in MS Word, Excel, Powerpoint, Photoshop, Indesign, HTML, CSS, Angular, A lot more, and a lot more of that. My operating system of choice is Mac OSX.\n\nI am confident that if you hire me, you will not regret it. My unique skill set and amazing past experiences make me the perfect candidate for the position you are looking to fill. I also believe I will fit well within the company culture. I will follow up in a few days, but if you need something in the mean time, feel free to email me at mitch@mitchs.co or call me at 5073305897.\n\nThank you in advance for your time.\n\n\nMitch Samuels"});
resumeApp.value('summary', {body: "I'm Mitch. I'm 20 years old and I'm a completely self-taught web designer/developer and current 3rd-year student at the University of Wisconsin, Madison, working towards a degree entirely unrelated to web design. I'm fluent in HTML, CSS, and Javascipt/JQuery, and I use them to make cool things on the internet. I started creating websites in middle school, and since then I have created websites for all kinds of people and organizations. From local restaurants and businesses, to small startup companies, to federal government agencies. I also like to play around with basically every language and platform out there, and because of that, I have published apps on the Google Play Store, the iOS App Store, the Windows Store, and even on WebOS and Zune."});


resumeApp.factory('jobs', [function(){
    var o = {
        jobs: [
            {jobEmployer: "Export Abroad", jobLocation: "Madison, WI", jobTime: "2014 - Present", jobTitle: "Frontend Engineer", jobDescription: "I'm currenty the lead frontend engineer for a small startup company in Madison, Wisconsin. I design and create the data-heavy web app dashboard, turning boring economical data and numbers into beautiful visualizations."},
            {jobEmployer: "U.S. Geological Survey", jobLocation: "Middleton, WI", jobTime: "2014 - Present", jobTitle: "Frontend UI/UX Designer", jobDescription: "I work with a team of backend developers to create web mapping applications. I take their bootstrapped applications and completely ignore all crappy federal government design guidelines and make them look modern and useable."}
        ]
    }
    return o;
}]);

resumeApp.factory('projects', [function(){
    var o = {
        projects: [
            {projectTitle: "Ineedaresume web app", projectDescription: "See this site you're on right now? Yeah, I made it. I wanted something to work on in my spare time, and making resumes absolutely sucks, so I thought I would make it suck less. Basically, it was as an excuse to learn Angular and build something beautiful and useful. Version 1.0 was alright, but version 2.0 is so much better."},
            {projectTitle: "Personal/portfolio site, Mitchs.co", projectDescription: "I figured since I'm a website designer and developer, I should have my own site. It's a simple, static HTML/CSS/Javascript site, nothing too special. I normally end up changing the design every few months because I get bored with it."}
        ]
    }
    return o;
}]);

resumeApp.factory('qualifications', [function(){
    var o = {
        qualifications: [
            {qualificationTitle: "Bachelor of Science in Computer Science", qualificationInstitution: "University of Wisconsin", qualificationLocation: "Madison, WI", qualificationCompletion: "2015", qualificationGpa: "3.75"},
            {qualificationTitle: "Bachelor of Science in Life Sciences Communications", qualificationInstitution: "University of Wisconsin", qualificationLocation: "Madison, WI", qualificationCompletion: "2017", qualificationGpa: "1.05"}
        ]
    }
    return o;
}]);



resumeApp.factory('skills', [function(){
    var o = {
        skills: [
            {skill: "HTML"},
            {skill: "CSS"},
            {skill: "Javascript"},
            {skill: "MEAN"},
            {skill: "LESS"},
            {skill: "Sketch"},
            {skill: "Adobe Suite"},
            {skill: "UI / UX"},
            {skill: "Responsive Design"},
            {skill: "Angular"}
        ]
    }
    return o;
}]);
