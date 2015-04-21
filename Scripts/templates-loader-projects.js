$(document).ready(function () {
// PROJECTS
// projects data model
var projectsData = {
    heading: "Software Projects",
    items: [{
        name: "Tic Tac Toe Game",
        technologies: "ASP.NET Web API, MSSQL Server, Entity Framework Code First, Repository Pattern, Unit Of Work, DI",
        description: "Web service for the game Tic Tac Toe and Web Client to consume the service. The ASP.NET Web API application is deployed in Azure. The project is a teamwork. My contribution: web services creation; organized the work on the project; public defense strategy.",
        links: [{ url: "https://github.com/YanaSlavcheva/TicTacToe/tree/master/TicTacToe", linkName: "Code in GitHub" }]
    },
    {
        name: "Bug Tracking System",
        technologies: "ASP.NET Web API, MSSQL Server, Entity Framework Code First, Repository Pattern, Unit Of Work",
        description: "RESTful Web Service for a Bug Tracker System based on ASP.NET Web API, Entity Framework Code First and MS SQL Server. The assignment is the final exam for Web Services and Cloud course in SoftUni.",
        links: [{ url: "https://github.com/YanaSlavcheva/SoftUni-Work/tree/master/WebServices-and-Cloud/Exam/ProblemText/BugTracker", linkName: "Code in GitHub" }]
    },
    {
        name: "Time Stealer Game",
        technologies: "C#, OOP, Windows Forms, SOLID Principles, Exceptions Handling",
        description: "2D object-oriented role-playing game. The main character is a student in SoftUni. He interacts with the trainers in order to gain knowledge and power. The project is a teamwork. My contribution: the idea for the game;took part in building the architecture of the project; created some of the classes and logic of the game; worked on the spites; organized the work on the project.",
        links: [{ url: "https://github.com/YanaSlavcheva/TimeStealerGame/tree/master/TeamworkTAMBA", linkName: "Code in GitHub" }]
    },
    {
        name: "Nakov Sky Game",
        technologies: "JavaScript, HTML5, CSS3, Responsive design",
        description: "A client-side JavaScript game. The objective of the game is to shoot the many Nakov characters that fall from the sky to save yourself. The game is a teamwork. My contribution: Part of the JS code and the design; public defense strategy.",
        links: [{ url: "https://github.com/YanaSlavcheva/NakovSkyGame", linkName: "Code in GitHub" }, { url: "http://nakov-sky.slavcheva.net/", linkName: "Play The Game Online" }]
    },
    {
        name: "SiliconUni Website",
        technologies: "HTML5, CSS3, Responsive design with Flexbox, JavaScript, PHP",
        description: "Sarcastic mirror of SoftUni website. SiliconUni is a university that teaches people how to become chalga singers very quickso that Bulgaria can become the Silicon Valley of Europe. The game is a teamwork. My contribution: most of the semantic HTML5 and CSS3; making the website fully responsive via Flexbox.",
        links: [{ url: "https://github.com/YanaSlavcheva/SilikonUni", linkName: "Code in GitHub" }, { url: "http://silikonuni.slavcheva.net/", linkName: "Visit The Site Online" }]
    },
    {
        name: "Online Store",
        technologies: "SPA With AngularJS, HTML5, CSS3, Consuming REST Services, jQuery, Noty",
        description: "Online Ads Publishing as single page application (SPA) using HTML5 and AngularJS. The app manages users and their ads organized by towns and categories. Anonymous site visitors can view published ads. Users can register, login, view their ads, add, edit and delete ads and logout. Administrators approve ads before publishing and can manage the users, ads, categories and towns. The assignment is the final exam for the SPA with AngularJS course in SoftUni.",
        links: [{ url: "https://github.com/YanaSlavcheva/SoftUni-Work/tree/master/Angular-JS-Exam", linkName: "Code in GitHub" }, { url: "http://store.slavcheva.net/#/", linkName: "Visit The Store Online" }]
    },
    {
        name: "Online CV Project",
        technologies: "HTML5, CSS3, JavaScript, Bootstrap, MustacheJS",
        description: "Online CV (the one You are viewing now).",
        links: [{ url: "https://github.com/YanaSlavcheva/SimpleCVBootstrap", linkName: "Code in GitHub" }, { url: "http://cv.slavcheva.net/", linkName: "View the CV Online" }]
    }]
};

// projects template
var projectsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"smallArticle\"><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Project Name</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Technologies And Techniques</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h5>{{technologies}}</h5></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Description</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><p>{{description}}</p></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Links</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\">{{#links}}<p><a href=\"{{url}}\" target=\"_blank\">{{linkName}}</a></p>{{/links}}</div></div></article>{{/items}}</div>";

// load projects info
var projectsOutput = Mustache.to_html(projectsTemplate, projectsData);
document.getElementById('projects').innerHTML = projectsOutput;
});