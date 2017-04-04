var HockeyURL = "https://andersonguelphjs.github.io/class/week12/myJson.json";
$.getJSON(HockeyURL)
    .done(function(data) {

        var hockeyData = array.object;
        console.log("success!");
        console.dir(data);

        var myHTML = "";

        myHTML += "<div> class='container'>";
        myHTML += "<div class='line1'" + hockeyData.name + "</div>";
        myHTML += "<div class='statsContainer'>";
        for(var i=1;i<6;i++){
          var item =,
        }

    })
    .fail(function(data) {
        console.log("fail!");
        console.dir(data);
    });
