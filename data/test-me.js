//$.getJSON('test-data.json', function (data) {
//    debugger;
//    var template = $('#personTpl').html();
//    var html = Mustache.to_html(template, data);
//    $('#sampleArea').html(html);
//});

var person = {
    firstName: "Christophe",
    lastName: "Coenraets",
    blogURL: "http://coenraets.org"
};

var template = $('#personTpl').html();
    var html = Mustache.to_html(template, data);
    $('#sampleArea').html(html);