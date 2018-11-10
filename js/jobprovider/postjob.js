var locations = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "http://localhost/TrovelnamaWeb/json/countries.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 


