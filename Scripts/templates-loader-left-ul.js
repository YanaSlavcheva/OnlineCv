$(document).ready(function () {
    // DATA AND LOADING
    // TECHNOLOGIES
    // technologies and skills data model
    var technologiesSkillsData = {
        heading: "Software Technologies And Skills",
        items: [
            {
                text: "C#, .NET"
            },
            {
                text: "MSSQL Server, MySQL, MongoDB"
            },
            {
                text: "JavaScript, jQuery, Noty"
            },
            {
                text: "AngularJS, MustacheJS"
            },
            {
                text: "HTML5, CSS3, Bootstrap"
            },
            {
                text: "Web Services"
            },
            {
                text: "Object-oriented Programming"
            },
            {
                text: "Design patterns, LINQ"
            }
        ]
    };

    // technologies and skills template
    var technologiesSkillsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul class=\"important\">{{#items}}<li>{{text}}</li>{{/items}}</ul></div>";

    // load technologies and skills info
    var technologiesSkillsOutput = Mustache.to_html(technologiesSkillsTemplate, technologiesSkillsData);
    document.getElementById('technologies-skills').innerHTML = technologiesSkillsOutput;

    // CERTIFICATES
    // certificates data model
    var certificatesData = {
        heading: "SoftUni Certificates",
        items: [
            {
                text: "Level2"
            },
            {
                text: "Level1"
            },
            {
                text: "C# Basics"
            },
            {
                text: "Web Fundamentals (HTML5, CSS3)"
            },
            {
                text: "Databases"
            },
            {
                text: "Database Applications"
            },
            {
                text: "JavaScript Basics"
            },
            {
                text: "Advanced JavaScript"
            },
            {
                text: "SPA with AngularJS"
            },
            {
                text: "PHP Basics, Java Basics"
            },
            {
                text: "Soft Skills"
            },
            {
                text: "Teamwork And Personal Skills"
            }]
    };

    // technologies and skills template
    var certificatesTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul>{{#items}}<li>{{text}}</li>{{/items}}</ul></div>";

    // load certificates and skills info
    var certificatesOutput = Mustache.to_html(certificatesTemplate, certificatesData);
    document.getElementById('certificates').innerHTML = certificatesOutput;
});