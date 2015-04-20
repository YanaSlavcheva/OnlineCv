// volunteering data model
data = {
    heading: "Volunteer Experience",
    items: [{
                date: "Nov 2014",
                name: "Europe Code Week => \"The Future is Code\" Program",
                description: "A couple of lectures in a hign school in Sofia => \"What does \"programmer\" mean, basic programming with Scratch.\""
            },
            {
                date: "Sept 2014",
                name: "Podarete Kniga\" Foundation => \"School for Employment\" Program",
                description: "TODO - FIX CONTENT!!! A couple of lectures in a hign school in Sofia => \"What does \"programmer\" mean, basic programming with Scratch.\""
            }]
};

// volunteering template
var template = "<div class=\"col-xs-12 col-md-12 col-lg-12\"><h2>{{heading}}</h2><div class=\"col-sm-12 col-md-12 col-lg-12\">{{#items}}<article class=\"row\"><div class=\"col-sm-12 col-md-4 col-lg-4\"><p>{{date}}</p></div><div class=\"col-sm-12 col-md-8 col-lg-8\"><h4>{{name}}</h4><p>{{description}}</p></div></article>{{/items}}</div></div>";

// load volunteering info
function loadTest() {
    var output = Mustache.to_html(template, data);
    document.getElementById('volunteer').innerHTML = output;
}










