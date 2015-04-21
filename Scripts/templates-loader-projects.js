$(document).ready(function () {
// PROJECTS
// projects data model
var projectsData = {
    heading: "Software Projects",
    items: [{
        name: "Tic Tac Toe Game",
        technologies: "ASP.NET Web API, MS SQL Server, Entity Framework Code First, Repository Pattern, Unit Of Work, DI, Azure",
        description: "Web service for Tic Tac Toe Game and Web Client to consume the service. Teamwork project - my contribution: web services creation; work process organization; deployment; public defense strategy.",
        links: [{ url: "https://github.com/YanaSlavcheva/TicTacToe/tree/master/TicTacToe", linkName: "Code in GitHub" }]
    },
    {
        name: "Bug Tracking System",
        technologies: "ASP.NET Web API, MS SQL Server, Entity Framework Code First, Repository Pattern, Unit Of Work",
        description: "RESTful Web Service for a Bug Tracker System. Final exam for Web Services and Cloud course in SoftUni.",
        links: [{ url: "https://github.com/YanaSlavcheva/SoftUni-Work/tree/master/WebServices-and-Cloud/Exam/ProblemText/BugTracker", linkName: "Code in GitHub" }]
    },
    {
        name: "Time Stealer Game",
        technologies: "C#, OOP, Windows Forms, SOLID Principles, Exceptions Handling",
        description: "2D object-oriented role-playing game. The main character is a student in SoftUni. He interacts with the trainers in order to gain knowledge and power. Teamwork project - my contribution: game idea; part of the architecture of the project; part of the game logic; sprites.",
        links: [{ url: "https://github.com/YanaSlavcheva/TimeStealerGame/tree/master/TeamworkTAMBA", linkName: "Code in GitHub" }]
    },
    {
        name: "Nakov Sky Game",
        technologies: "JavaScript, HTML5, CSS3, Responsive design",
        description: "A client-side JavaScript game. The main character shoots the many Nakov characters. Teamwork project - my contribution: part of the JS code and the design; public defense strategy.",
        links: [{ url: "https://github.com/YanaSlavcheva/NakovSkyGame", linkName: "Code in GitHub" }, { url: "http://nakov-sky.slavcheva.net/", linkName: "Play The Game Online" }]
    },
    {
        name: "SiliconUni Website",
        technologies: "HTML5, CSS3, Responsive design with Flexbox, JavaScript, PHP",
        description: "Sarcastic mirror of SoftUni website. SiliconUni educates chalga singersso that Bulgaria can become the Silicon Valley of Europe. Teamwork project - my contribution: most of the semantic HTML5 and CSS3; the responsive design via Flexbox.",
        links: [{ url: "https://github.com/YanaSlavcheva/SilikonUni", linkName: "Code in GitHub" }, { url: "http://silikonuni.slavcheva.net/", linkName: "Visit The Site Online" }]
    },
    {
        name: "Online Store",
        technologies: "SPA With AngularJS, HTML5, CSS3, Consuming REST Services, jQuery, Noty",
        description: "Online Ads Publishing. The app manages users and their ads. There are administrator, registered and anonymous users. Final exam for the SPA with AngularJS course in SoftUni.",
        links: [{ url: "https://github.com/YanaSlavcheva/SoftUni-Work/tree/master/Angular-JS-Exam", linkName: "Code in GitHub" }, { url: "http://store.slavcheva.net/#/", linkName: "Visit The Store Online" }]
    },
    {
        name: "Supermarket Chain Database",
        technologies: "C#, .NET, Entity Framework, ITextSharp, JSON .NET, ByteScout, Xml.Serialization, Oracle DB, MySQL, MongoDB",
        description: "Transfering data between Oracle, SQL Server and MySQL. Data import and export: JSON, XML, XLS, PDF files. Teamwork project - the project was developed via pair programming with a colleague.",
        links: [{ url: "https://github.com/YanaSlavcheva/AllTheDatabasesProject", linkName: "Code in GitHub" }]
    },
    {
        name: "Online CV Project",
        technologies: "HTML5, CSS3, JavaScript, Bootstrap, MustacheJS",
        description: "Online CV (the one You are viewing now).",
        links: [{ url: "https://github.com/YanaSlavcheva/OnlineCv", linkName: "Code in GitHub" }, { url: "http://cv.slavcheva.net/", linkName: "View the CV Online" }]
    }]
};

// projects template
var projectsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"smallArticle\"><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Project Name</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Technologies And Techniques</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h5>{{technologies}}</h5></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Description</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><p>{{description}}</p></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>Links</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\">{{#links}}<p><a href=\"{{url}}\" target=\"_blank\">{{linkName}}</a></p>{{/links}}</div></div></article>{{/items}}</div>";

// load projects info
var projectsOutput = Mustache.to_html(projectsTemplate, projectsData);
document.getElementById('projects').innerHTML = projectsOutput;
});