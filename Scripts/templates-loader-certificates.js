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
                url: "https://softuni.bg/Certificates/Details/3525/3984e219"
            },
            {
                text: "Object-Oriented Programming",
                url: "https://softuni.bg/Certificates/Details/2786/d42b6d4f"
            },
            {
                text: "Web Fundamentals (HTML5, CSS3)",
                url: "https://softuni.bg/Certificates/Details/3521/a6791e83"
            },
            {
                text: "Databases",
                url: "https://softuni.bg/Certificates/Details/2148/551e3724"
            },
            {
                text: "Database Apps",
                url: "https://softuni.bg/Certificates/Details/2039/d0a106ab"
            },
            {
                text: "JavaScript Basics",
                url: "https://softuni.bg/Certificates/Details/3520/31f6439f"
            },
            {
                text: "Advanced JavaScript",
                url: "https://softuni.bg/Certificates/Details/2785/393de9cb"
            },
            {
                text: "JavaScript Applications",
                url: "https://softuni.bg/Certificates/Details/2784/26952214"
            },
            {
                text: "SPA with AngularJS",
                url: "https://softuni.bg/Certificates/Details/2560/33777f30"
            },
            {
                text: "Java Basics",
                url: "https://softuni.bg/Certificates/Details/3523/1dd7ea9b"
            },
            {
                text: "PHP Basics",
                url: "https://softuni.bg/Certificates/Details/3519/0bb1f8b1"
            },
            {
                text: "Soft Skills",
                url: "https://softuni.bg/Certificates/Details/3524/c199ceac"
            },
            {
                text: "Teamwork And Personal Skills",
                url: "https://softuni.bg/Certificates/Details/3522/54682c1e"
            }]
    };

    // certificates template
    var certificatesTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul>{{#items}}<li><a class=\"no-print\" href=\"{{url}}\" title=\"{{text}}\" target=\"_blank\">{{text}}</a></li>{{/items}}</ul></div>";

    // load certificates info
    var certificatesOutput = Mustache.to_html(certificatesTemplate, certificatesData);
    document.getElementById('certificates').innerHTML = certificatesOutput;
});