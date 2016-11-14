
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ", " + city;

    var googleImgReq = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';

     $greeting.text("So, you want to live at " + address + "?")

    $body.append('<img class="bgimg" src = " '+ googleImgReq +' " >');

var nytimesUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city + "&sort=newest&api-key=1b243b0950084ae49805b5bc72aa9f0e"
$.getJSON(nytimesUrl, function(data){

    $nytHeaderElem.text('New York Times Articles About ' + city);

        articles = data.response.docs;
        for (var i =0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">'+ '<a href="'+ article.web_url +'">'+article.headline.main +
            '<a>'+'<p>'+ article.snippet + '<p>' + '</li>');


        };
    }).error(function(e){
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });

var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + city + "&format=json&callback=wikiCallback";

var wikiRequestTimeout = setTimeout(function(){
    $wikiElem.text("failed to get wikipedia resources");
},8000);

$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    // jsonp: "callback"
    success: function( response ){
        var articleList = response[1];

        for (var i = 0; i < articleList.length; i++){
            articleStr = articleList[i];
            var url = "http://en.wikipedia.org/wiki/" + articleStr;
            $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
        };

        clearTimeout(wikiRequestTimeout);
    }
});



//1600 pennsylvania ave, washington dc https://maps.googleapis.com/maps/api/streetview?+size=600x400&location=1600 pennsylvania ave, washington dc&key=AIzaSyA3GKYWJ1z-CuATOVTtioYqntdRPgf1Q4M

    return false;
};
// GOOGLE API KEY = AIzaSyA3GKYWJ1z-CuATOVTtioYqntdRPgf1Q4M
$('#form-container').submit(loadData);
