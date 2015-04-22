$(document).ready(function () {
    // CERTIFICATES
    // certificates data model
    var certificatesData = {
        heading: "SoftUni Certificates",
        items: [
            {
                text: "Level1",
                url: "https://softuni.bg/Certificates/Details/408/a48858bd"
            },
            {
                text: "Level2",
                url: "https://softuni.bg/Certificates/Details/1598/09ee619b"
            },
            {
                text: "C# Basics",
                url: "https://softuni.bg/Certificates/Details/72/edea8cf0"
            },
            {
                text: "Object-Oriented Programming",
                url: "https://softuni.bg/Certificates/Details/1090/228530d6"
            },
            {
                text: "Web Fundamentals (HTML5, CSS3)",
                url: "https://softuni.bg/Certificates/Details/160/d90a472f"
            },
            {
                text: "Databases",
                url: "https://softuni.bg/Certificates/Details/1792/9e7d6af7"
            },
            {
                text: "Database Apps",
                url: "https://softuni.bg/Certificates/Details/1989/258619ed"
            },
            {
                text: "JavaScript",
                url: "https://softuni.bg/Certificates/Details/183/2e274a15"
            },
            {
                text: "Advanced JavaScript",
                url: "https://softuni.bg/Certificates/Details/1093/1f8cecbc"
            },
            {
                text: "JavaScript Applications",
                url: "https://softuni.bg/Certificates/Details/1116/1ab10aa9"
            },
            {
                text: "SPA with AngularJS",
                url: "https://softuni.bg/Certificates/Details/1509/0e61bf0b"
            },
            {
                text: "Java Basics",
                url: "https://softuni.bg/Certificates/Details/51/cb0ffe5d"
            },
            {
                text: "PHP Basics",
                url: "https://softuni.bg/Certificates/Details/262/4d66a338"
            },
            {
                text: "Soft Skills",
                url: "https://softuni.bg/Certificates/Details/334/b70c418e"
            },
            {
                text: "Teamwork And Personal Skills",
                url: "https://softuni.bg/Certificates/Details/280/2f370231"
            }]
    };

    // certificates template
    var certificatesTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul>{{#items}}<li><a class=\"no-print\" href=\"{{url}}\" title=\"{{text}}\" target=\"_blank\">{{text}}</a></li>{{/items}}</ul></div>";

    // load certificates info
    var certificatesOutput = Mustache.to_html(certificatesTemplate, certificatesData);
    document.getElementById('certificates').innerHTML = certificatesOutput;
});