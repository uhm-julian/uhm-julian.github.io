var weatherUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22toronto%2C%20ON%22)%20and%20u%3D'c'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
$.get(weatherUrl)
    .done(function(data) {

        //weaterhData is smaller more manageable object
        var weatherData = data.query.results.channel;
        console.log("success!");
        console.dir(weatherData);

        var myHtml = "";
        //today'data
        myHtml += "<div id='weatherContainer'>";

        myHtml += "<div class='font24'>" + weatherData.location.city + ", " +
            weatherData.location.region + "</div>";

        myHtml += "<div class='font24'>" + weatherData.item.condition.temp + " " +
            weatherData.units.temperature + "</div>";

        myHtml += "<div class='font24'>" + weatherData.item.condition.temp + " " +
            weatherData.units.temperature + "</div>";
            
        //forecast container
        myHtml += "<div id='forecastcontainer'>";
        // loop through the forecast

        for (var i = 1; i < 6; i++) {
            var item = weatherData.item.forecast[i];
            myHtml += "<div class='font16'>";
            myHtml += "<div>" + item.day + " " + item.date + "</div>";
            myHtml += "<div>" + item.text + "</div>";
            myHtml += "</div>";
        }
        myHtml += "</div>";

        myHtml += "</div>";

        //put myHtml on screen
        $(document).ready(function() {
            $(".myContainer").html(myHtml);
        });
    })
    .fail(function(data) {
        console.log("fail!");
        console.dir(data);
    });
