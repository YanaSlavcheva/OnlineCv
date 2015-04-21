$(document).ready(function() {
    // VOLUNTEERING
    // volunteering data model

    var volunteerData = {
        heading: "Volunteer Experience",
        items: [
            {
                date: "Nov 2014",
                name: "Europe Code Week: \"The Future is Code\" Program",
                description: "A couple of lectures in a hign school in Sofia => \"What does \"programmer\" mean, basic programming with Scratch.\""
            },
            {
                date: "Sept 2014",
                name: "Give A Book\" Foundation: \"School for Employment\" Program",
                description: "Assistant in WordPress lectures with children from orphanages. I delivered a lecture on Photoshop / GIMP."
            }
        ]
    };

    // volunteering template
    var volunteerTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2><div class=\"col-sm-12 col-md-12 col-lg-12\">{{#items}}<article class=\"row smallArticle\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><p>{{description}}</p></div></article>{{/items}}</div></div>";

    // load volunteering info
    var volunteerOutput = Mustache.to_html(volunteerTemplate, volunteerData);
    document.getElementById('volunteer').innerHTML = volunteerOutput;
});
 








