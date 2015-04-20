$.getJSON('../data/test-data.json', function (data) {
    debugger;
    var template = $('#personTpl').html();
    var html = Mustache.to_html(template, data);
    $('#sampleArea').html(html);
});