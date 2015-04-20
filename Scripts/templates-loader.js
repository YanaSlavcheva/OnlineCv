$(document).ready(function () {
    // VOLUNTEERING
    // volunteering data model

    var volunteerData = {
        heading: "Volunteer Experience",
        items: [{
            date: "Nov 2014",
            name: "Europe Code Week => \"The Future is Code\" Program",
            description: "A couple of lectures in a hign school in Sofia => \"What does \"programmer\" mean, basic programming with Scratch.\""
        },
                {
                    date: "Sept 2014",
                    name: "Give A Book\" Foundation => \"School for Employment\" Program",
                    description: "Assistant in WordPress lectures with children from orphanages. I delivered a lecture on Photoshop / GIMP."
                }]
    };

    // volunteering template
    var volunteerTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2><div class=\"col-sm-12 col-md-12 col-lg-12\">{{#items}}<article class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><p>{{description}}</p></div></article>{{/items}}</div></div>";

    // load volunteering info
    var volunteerOutput = Mustache.to_html(volunteerTemplate, volunteerData);
    document.getElementById('volunteer').innerHTML = volunteerOutput;

    // WORK
    // work data model
    var workData = {
        heading: "Work Experience",
        items: [{
            date: "Jan 2011 - Mar 2014",
            name: "Architect, Manager, Owner",
            company: "W.A.I.Studio Ltd",
            description: "Architecture, Interior design"
        },
        {
            date: "Jan 2004 - Jan 2011",
            name: "Architect, Drafstman",
            company: "Various Companies",
            description: "Architecture, Interior design, 3D Models"
        }]
    };

    // work template
    var workTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><h5>{{company}}</h5><p>{{description}}</p></div></article>{{/items}}</div>";

    // load work info
    var workOutput = Mustache.to_html(workTemplate, workData);
    document.getElementById('work').innerHTML = workOutput;

    // PROJECTS
    // projects data model
    var projectsData = {
        heading: "Software Projects",
        items: [{
            name: "Tic Tac Toe Game - Backend",
            technologies: "Architect, Manager, Owner",
            description: "W.A.I.Studio Ltd",
            code: "Architecture, Interior design"
        },
        {
            name: "Bug Tracking System",
            technologies: "ASP.NET, Entity Framework, MS SQL Server",
            description: "Design and implement RESTful Web Services based on ASP.NET Web API, Entity Framework Code First and MS SQL Server for a bug tracking system. The assignment is the final exam from Web Services and Cloud course in SoftUni.",
            code: "Architecture, Interior design"
        }]
    };

    // projects template
    // TODO: the template is not corrected
    var projectsTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><h5>{{company}}</h5><p>{{description}}</p></div></article>{{/items}}</div>";

    // load work info
    var projectsOutput = Mustache.to_html(projectsTemplate, projectsData);
    document.getElementById('projects').innerHTML = projectsOutput;
});








