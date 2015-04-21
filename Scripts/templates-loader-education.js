$(document).ready(function () {
    // EDUCATION
    // education data model
    var educationData = {
        heading: "Education",
        items: [
            {
                date: "March 2014 - Present",
                university: "Software University, Sofia",
                title: "Scholarship Student",
                description: "As a scholarship student I have worked on creating exam and homework problems, evaluating exams, preparing materials for courses, delivering exam preparation lectures.",
                links: [{ url: "https://www.youtube.com/playlist?list=PLNT7vyzdLKHcz3T0de1RnbGL1LDUnNQXI", linkName: "Watch My Lectures Online" }]
            },
            {
                date: "2002 - 2010",
                university: "UACEG, Sofia",
                title: "Master of Architecture"
            }
        ]
    };

    // education template
    var educationTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2>{{#items}}<article class=\"row smallArticle\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{university}}</h4><h5>{{title}}</h5><p>{{description}}</p>{{#links}}<p><a href=\"{{url}}\" target=\"_blank\">{{linkName}}</a></p>{{/links}}</div></article>{{/items}}</div>";

    // load work info
    var educationOutput = Mustache.to_html(educationTemplate, educationData);
    document.getElementById('education').innerHTML = educationOutput;
});