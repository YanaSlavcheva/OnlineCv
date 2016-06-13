$(document).ready(function () {
    // CERTIFICATES
    // certificates data model
    var certificatesData = {
        heading: "Certificates",
        items: [
            {
                text: "SoftUni - Diploma",
                url: "https://softuni.bg/certificates/details/8576/83fd0e04"
            },
            {
                text: "Object-Oriented Programming",
                url: "https://softuni.bg/Certificates/Details/2786/d42b6d4f"
            },
            {
                text: "ASP.NET MVC",
                url: "https://softuni.bg/certificates/details/5903/6f887117"
            },
            {
                text: "Web Fundamentals (HTML5, CSS3)",
                url: "https://softuni.bg/Certificates/Details/3521/a6791e83"
            },
            {
                text: "Database Apps",
                url: "https://softuni.bg/Certificates/Details/2039/d0a106ab"
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
            }]
    };

    // certificates template
    var certificatesTemplate = "<div class=\"col-xs-12 col-md-12 col-lg-12 left\"><h2>{{heading}}</h2><ul>{{#items}}<li><a class=\"no-print\" href=\"{{url}}\" title=\"{{text}}\" target=\"_blank\">{{text}}</a></li>{{/items}}</ul></div>";

    // load certificates info
    var certificatesOutput = Mustache.to_html(certificatesTemplate, certificatesData);
    document.getElementById('certificates').innerHTML = certificatesOutput;
});