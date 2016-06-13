$(document).ready(function () {
// PROJECTS
// projects data model
var projectsData = {
    heading: "Software Projects",
    items: [{
        name: "Online Credits Application",
        technologies: "ASP.NET WebForms, DotNetNuke, SQL, T-SQL, JavaScript, jQuery, HTML5, CSS3",
        description: "The project is property of Smart IT. It was created in collaboration with many people from the company. The project is web application that provides the clients the opportunity to apply for credit online. The application has complicated business logic.",
        links: [{ url: "https://www.vivacredit.bg/%D0%9A%D0%B0%D0%BD%D0%B4%D0%B8%D0%B4%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%B0%D0%B9", linkName: "Visit the project" }]
    },
    {
        name: "Happy Me",
        technologies: "ASP.NET MVC , SQL Server, JavaScript, Entity Framework, Bootstrap, HTML5, CSS3",
        description: "Online educational platform supporting education, development and happiness of children with autism.",
        links: [{ url: "http://happyme.site/", linkName: "Visit the project" }]
    },
    {
        name: "Online CV Project",
        technologies: "HTML5, CSS3, JavaScript, Bootstrap, MustacheJS",
        description: "Online CV (the one You are viewing now).",
        links: [{ url: "https://github.com/YanaSlavcheva/OnlineCv", linkName: "Code in GitHub" }, { url: "http://mycv.slavcheva.net/", linkName: "View the CV Online" }]
    }]
};

// projects template
var projectsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"smallArticle\"><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p class=\"custom-header\">Project Name</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p class=\"custom-header\">Technologies And Techniques</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h5>{{technologies}}</h5></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p class=\"custom-header\">Description</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><p>{{description}}</p></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p class=\"custom-header\">Links</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\">{{#links}}<p><a href=\"{{url}}\" target=\"_blank\">{{linkName}}</a></p>{{/links}}</div></div></article>{{/items}}</div>";

// load projects info
var projectsOutput = Mustache.to_html(projectsTemplate, projectsData);
document.getElementById('projects').innerHTML = projectsOutput;
});