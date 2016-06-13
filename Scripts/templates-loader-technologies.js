$(document).ready(function () {
    // TECHNOLOGIES
    // technologies and skills data model
    var technologiesSkillsData = {
        heading: "Software Technologies And Skills",
        items: [
            {
                text: "C#, .NET Framework"
            },
            {
                text: "OOP, Design patterns, LINQ"
            },
            {
                text: "ASP.NET MVC, ASP.NET WebForms"
            },
            {
                text: "MS SQL Server, T-SQL"
            },
            {
                text: "JavaScript, jQuery, Noty"
            },
            {
                text: "HTML5, CSS3, Bootstrap"
            },
            {
                text: "DevExpress UI Controls"
            },
            {
                text: "DotNetNuke"
            }
        ]
    };
	

    // technologies and skills template
    var technologiesSkillsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul class=\"important\">{{#items}}<li>{{text}}</li>{{/items}}</ul></div>";

    // load technologies and skills info
    var technologiesSkillsOutput = Mustache.to_html(technologiesSkillsTemplate, technologiesSkillsData);
    document.getElementById('technologies-skills').innerHTML = technologiesSkillsOutput;
});