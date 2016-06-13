$(document).ready(function () {
    // WORK
    // work data model
    var workData = {
        heading: "Work Experience",
        items: [
            {
                date: "Jan 2016 - Present",
                name: "Web Developer (.NET)",
                company: "SmartIT - Smart Innovative Technologies",
                description: "Development of new web applications, maintaining and developing new features for existing web applications. Communicating with clients. Used technologies: .NET Framework, C#, DNN, ASP.NET MVC, ASP.NET WebForms, SQL Server, T-SQL, JavaScript, jQuery, HTML5, CSS3, Bootstrap, DevExpress UI Controls."
            },
            {
                date: "May 2015 - Jan 2016",
                name: "Software Developer (.NET)",
                company: "SmartIT - Smart Innovative Technologies",
                description: "Development of new features and maintaining existing desktop application. Used technologies: .NET Framework, C#, SQL Server, T-SQL,DevExpress UI Controls, WPF, XAML, WinForms."
            },
            {
                date: "Jan 2011 - Mar 2014",
                name: "Architect, Manager, Owner",
                company: "W.A.I.Studio Ltd",
                description: "Architecture, Interior design"
            }
        ]
    };

    // work template
    // with description
    // var workTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"row smallArticle\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><h5>{{company}}</h5><p>{{description}}</p></div></article>{{/items}}</div>";

    // no description
    var workTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"row smallArticle\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><h5>{{company}}</h5></div></article>{{/items}}</div>";

    // load work info
    var workOutput = Mustache.to_html(workTemplate, workData);
    document.getElementById('work').innerHTML = workOutput;
});