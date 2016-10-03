
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
    console.log(googleImgReq);

//1600 pennsylvania ave, washington dc https://maps.googleapis.com/maps/api/streetview?+size=600x400&location=1600 pennsylvania ave, washington dc&key=AIzaSyA3GKYWJ1z-CuATOVTtioYqntdRPgf1Q4M

    return false;
};
// GOOGLE API KEY = AIzaSyA3GKYWJ1z-CuATOVTtioYqntdRPgf1Q4M
$('#form-container').submit(loadData);
