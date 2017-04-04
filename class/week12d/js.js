var url = "https://andersonguelphjs.github.io/class/week12/myJson.json";

//we use get for an html file
//we use getJSON for a .json file
$.getJSON(url)
    .done(function(data) {
        console.log("success!");
        console.dir(data);
        var myHtml = "";
        for (var i = 0; i < data.length; i++) {
            console.log("Rank Number " + i + "'s name " + data[i].name);
            myHtml += "<tr data-index='" + i + "'>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + data[i].name + "</td>" +
                "<td>" + data[i].team + "</td>" +
                "<td>" + data[i].position + "</td>" +
                "<td>" + data[i].gamesPlayed + "</td>" +
                "<td>" + data[i].goals + "</td>" +
                "<td>" + data[i].assists + "</td>" +
                "<td>" + data[i].points + "</td>" +
                "</tr>";
        }
        $(document).ready(function() {
            $("#statsTable").append(myHtml);
            $("#statsTable").find("td").on("mouseover", function() {
                var index = $(this).closest("tr").attr("data-index");
                console.log("index :" + index);
                $("#playerInfo").find("img").attr("src", data[index].image);
                $("#playerInfo").find("div").html(data[index].details);

            });
        });
    })
    //chainging commands and therefor no semicolon
    .fail(function(data) {
        console.log("fail!");
        console.dir(data);
    });
